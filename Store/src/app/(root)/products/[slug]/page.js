import Actions from "@/components/ProductDetails/Actions";
import Images from "@/components/ProductDetails/Images";
import CategoryServices from "@/syncs/CategorySync";
import ProductServices from "@/syncs/ProductSync";
import Link from "next/link";
export default async function ProductDetailsPage({ params }) {
  const slug = params.slug;
  // const product = await ProductServices.getProductById(id);
  const product = await ProductServices.getProductBySlug(slug);
  const { image, title, prices, description, category, tag, stock, sales } =
    product;
  const categoryData = await CategoryServices.getCategoryById(category);
  // console.log(categoryData);

  return (
    <div className="mx-auto max-w-5xl">
      <div className="my-8">
        <Link
          href={`/products?category=${categoryData.parentId}`}
          className="font-semibold hover:text-primary"
        >
          {categoryData.parentName}
        </Link>
        &gt;
        <Link
          href={`/products?category=${categoryData._id}`}
          className="font-semibold hover:text-primary"
        >
          {categoryData.name.en}
        </Link>
        &gt; <span>{title.en}</span>
      </div>
      <div className="my-4 flex flex-col justify-center gap-5 rounded-md p-2 sm:flex-row sm:p-8 md:gap-10 lg:gap-20 lg:border">
        <Images image={image} title={title} />

        <div className="flex-1 space-y-3">
          <h1 className="text-2xl font-semibold">{title.en}</h1>
          <h3 className="text-2xl font-semibold">
            ${prices.price}
            {prices.discount != 0 && (
              <span className="text-sm text-red-600 line-through">
                ${prices.originalPrice}
              </span>
            )}
          </h3>
          <p className="py-2 text-sm font-light opacity-80">{description.en}</p>
          <p className="mt-2 w-fit rounded-full bg-green-500/30 px-1.5 text-xs">
            stock: {stock}
          </p>
          <p className="mt-2 w-fit rounded-full px-1.5 text-xs">
            Total sales: {sales ? sales : 0}
          </p>
          <p className="mt-2 text-sm">
            category: {categoryData.name.en || category.name.in}
          </p>
          <div>
            {tag && tag.length !== 0 && (
              <div className="flex flex-row">
                {JSON.parse(tag).map((t, i) => (
                  <span
                    key={i + 1}
                    className="mr-2 mt-2 inline-flex items-center justify-center rounded-full border-0 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
          <Actions stock={stock} />
        </div>
      </div>
      {/* <Categories /> */}
      {/* <PopularProduct /> */}
    </div>
  );
}
