import Navbar from "./components/navbar"
import Card from "./components/card"

function App(){
  return(
    <>
    {/* <h1 className="text-center">Hello Components</h1> */}
    <Navbar />
    <h1 className="text-center text-2xl mt-5 font-bold">IPHONE</h1>
    <div className="flex justify-center flex-wrap gap-5">
      <Card  src="https://www.pakmobizone.pk/wp-content/uploads/2023/09/Apple-iphone-15-Pro-Max-Natural-Titanium-5.jpg" title="Iphone 15" des="IOS 14"/>
      <Card  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVavXwOHvSl8eM-DaIj800KT3uE8EHEM940w&s" title="Iphone 15" des="IOS 14"/>
      <Card  src="https://myshop.pk/pub/media/catalog/product/cache/26f8091d81cea4b38d820a1d1a4f62be/i/p/iphone-15-pro-finish-select-202309-6-1inch-blacktitanium_av1_geo_us-myshop-pk-13_1_2_3.jpg" title="Iphone 15" des="IOS 14"/>
      <Card  src="https://phantom-marca.unidadeditorial.es/2656dad6e5594f77cd019ca035ba9818/resize/828/f/jpg/assets/multimedia/imagenes/2023/09/13/16945621537653.jpg" title="Iphone 15" des="IOS 14"/>
      <Card  src="https://phantom-marca.unidadeditorial.es/2656dad6e5594f77cd019ca035ba9818/resize/828/f/jpg/assets/multimedia/imagenes/2023/09/13/16945621537653.jpg" title="Iphone 15" des="IOS 14"/>
      <Card  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlrQZsGfjNuunUqEPlbvD90bEoNftMxFGeOw&s" title="Iphone 15" des="IOS 14"/>
    </div>
    </>
  )
}
export default App