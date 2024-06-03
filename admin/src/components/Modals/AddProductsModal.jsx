"use client";
import { useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { IoIosAddCircleOutline } from "react-icons/io";
import Input from "../Input/Input";
import TextArea from "../Input/TextArea";
import FileUpload from "../Input/FileUpload";
import Select from "../Select/Select";
import ToggleButton from "../Button/ToggleButton";

const options = ["new", "new1", "new2", "new3", "new4"];

export default function AddProductsModal() {
  const [openModal, setOpenModal] = useState(false);
  const [haveVariant, setHaveVariant] = useState(false);
  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
    return () => (document.body.style.overflow = "auto");
  }, [openModal]);

  return (
    <div>
      {/* Pay Button */}
      <Button
        className="bg-primary hover:bg-primary-600"
        onClick={() => setOpenModal(true)}
      >
        <IoIosAddCircleOutline />
        Add product
      </Button>
      <div
        onClick={() => setOpenModal(false)}
        className={`fixed inset-0 z-10  h-full w-full bg-gray-600/10 ${openModal ? "opacity-1 visible" : "invisible opacity-0"}`}
      >
        <div
          onClick={(e_) => e_.stopPropagation()}
          className={`fixed left-auto right-0 top-[85px] flex w-full max-w-4xl justify-center overflow-x-hidden overflow-y-scroll bg-white drop-shadow-md ${openModal ? "opacity-1 visible translate-y-0 duration-300" : "invisible translate-y-32 opacity-0 duration-200"}`}
          style={{ height: "calc(100vh - 85px)" }}
        >
          <div className="w-full px-4 py-8 sm:px-6 lg:px-8">
            <div className="mb-4 flex w-full items-center justify-between rounded-md bg-primary-100 p-2 text-primary-600">
              <div className="flex gap-4">
                <h1>Basic Info</h1> {haveVariant && <h1>Combination</h1>}
              </div>
              {/* toggle button */}
              <ToggleButton />
            </div>
            <div className="w-full space-y-3">
              <Input
                type="text"
                label="Product Title/Name"
                id="_addProduct_product_title_or_name"
                placeholder="Product Title/Name"
              />
              <TextArea
                type="text"
                label="Product Description"
                id="_addProduct_product_description"
                placeholder="Product Description"
              />
              <FileUpload />
              <Input
                type="text"
                label="Product SKU"
                id="_addProduct_product_sku"
                placeholder="Product SKU"
              />
              <Input
                type="text"
                label="Product Barcode"
                id="_addProduct_product_barcode"
                placeholder="Product Barcode"
              />
              <Select
                className="w-full"
                label="Category"
                options={options}
                defaultValue="Select Category"
              />
              <Input
                type="text"
                label="Default Categories"
                id="_addProduct_default_categories"
                placeholder="Default Categories"
              />
              <Input
                type="text"
                label="Product Price"
                id="_addProduct_product_price"
                placeholder="Product Price"
              />
              <Input
                type="text"
                label="Sell Price"
                id="_addProduct_sell_price"
                placeholder="Sell Price"
              />
              <Input
                type="text"
                label="Product Quantity"
                id="_addProduct_product_quantity"
                placeholder="Product Quantity"
              />
              <Input
                type="text"
                label="Product Slug"
                id="_addProduct_product_slug"
                placeholder="Product Slug"
              />
              <Input
                type="text"
                label="Product Tags"
                id="_addProduct_product_tags"
                placeholder="Product Tags"
              />
            </div>

            <div className="flex items-center justify-between gap-3 py-5">
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-red-600"
              >
                Cancel
              </Button>
              <Button
                onClick={() => {
                  setOpenModal(false);
                }}
                className="w-full bg-primary"
              >
                Add to Product
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
