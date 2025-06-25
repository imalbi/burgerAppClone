<script>
import { products } from "../../../../data/menu";

const productCategories = Object.entries(products);

</script>

<div class="flex h-10 items-center justify-between fixed sm:absolute top-0 left-0 w-full bg-white z-10 shadow">
    <a class="absolute left-0 cursor-pointer font-bold text-3xl ml-2 py-4" href="/other" aria-label="Back">&lt;</a>
    <h1 class="mx-auto text-center w-full font-bold">Prodotti</h1>
</div>
<div class="h-10"></div>

<div>
    <img class="aspect-video object-cover w-full "src="/media/products_thumb.webp" alt="Products thumbnail">
</div>

<div class="w-11/12 m-auto">

    {#each productCategories as [categoryName, productList]}
    <section class="category mb-8">
        <h2 class="text-2xl font-semibold mb-4 text-yellow-600">{categoryName}</h2>
        <ul class="product-list grid  grid-cols-2 gap-4">
            {#each productList as product (product.id)}
            <li class=" bg-white rounded-lg shadow p-4 flex flex-col gap-2 hover:shadow-lg transition-shadow">
                <h3 class="text-lg font-bold text-gray-800">{product.name}</h3>
                <p class="text-gray-600">{product.description}</p>
                <span class="price text-yellow-600 font-semibold text-right mt-auto">€ {product.price.toFixed(2)}</span>
            </li>
            {/each}
        </ul>
    </section>
    {/each}
</div>

