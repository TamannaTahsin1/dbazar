"use client";
import CategoryServices from "@/syncs/CategorySync";
// import { getCategoriesData } from "@/api/getCategoriesData";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function DropDownCategoryMenu({ CategoryOpen }) {
  const [categoryData, setCategoryData] = useState([]);
  const [domMount, setDomMount] = useState(false);
  const [submenu, setSubmenu] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await CategoryServices.getShowingCategory();
        setCategoryData(response[0]); // Assuming response is already parsed JSON
        setDomMount(true);
      } catch (error) {
        console.error("Error fetching data:", error);
        setDomMount(true);
      }
    };

    fetchData();
  }, []);

  // const categoryData = await getCategoriesData();
  // console.log(categoryData.children);

  if (!domMount) {
    return (
      <div
        className={`absolute top-full z-50 flex h-96 w-60 origin-top items-center justify-center rounded-md border bg-white p-2 drop-shadow-sm duration-0 ${CategoryOpen ? "visible opacity-100 duration-300" : "invisible opacity-0"}`}
      >
        <div className="h-10 w-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-sky-400 border-l-transparent border-r-transparent"></div>
      </div>
    );
  }

  return (
    <div
      className={`absolute top-full z-50 mb-0 h-fit max-h-[450px] w-60 origin-top select-none overflow-y-scroll rounded-md border border-gray-200 bg-white p-2 text-sm drop-shadow-sm duration-0 ${CategoryOpen ? "visible opacity-100 duration-300" : "invisible opacity-0"}`}
    >
      {categoryData?.children?.map((option, idx) => (
        <div key={`category_${idx}_`} className="overflow-hidden">
          <div
            onClick={() =>
              setSubmenu(submenu == option?.name?.en ? null : option?.name?.en)
            }
          >
            <div>
              <Link
                href={`/products?name=${option.name.en}&category=${option._id}`}
                key={idx}
                className="flex items-center gap-1 rounded-md p-2 text-gray-600 duration-200 hover:bg-gray-200 hover:text-primary"
              >
                <Image src={option?.icon} width="20" height="20" alt="icon" />{" "}
                <span className="flex w-full items-center justify-between">
                  <span>{option?.name?.en}</span>{" "}
                  <MdKeyboardArrowRight
                    className={`${submenu === option.name.en ? "rotate-90" : ""}`}
                  />
                </span>
              </Link>
              <div onClick={(event) => event.stopPropagation()}>
                <div
                  className={`${submenu === option?.name?.en ? "visible ml-3 h-full border-l opacity-100" : "invisible h-0 opacity-0"} text-xs text-black/70`}
                >
                  {option?.children?.map((sub, i) => (
                    <Link
                      href={`/products?name=${sub.name.en}&category=${sub._id}`}
                      key={`subMenu_${i}`}
                    >
                      <div className="flex w-full items-center justify-between rounded-e-md py-1.5 pl-4 pr-2 hover:bg-gray-200 hover:text-primary">
                        <span>
                          {/* <span className="inline-block h-px w-4 bg-black/70"></span>{" "} */}
                          {sub?.name?.en}
                        </span>{" "}
                        <MdKeyboardArrowRight />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
