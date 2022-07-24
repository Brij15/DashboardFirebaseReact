import CryptoList from "../widgets/CryptoList"
import FeaturedInfo from "../widgets/FeaturedInfo"
import APIWidgets from "../widgets/APIWidgets"
import "./home.css"

export default function Home() {
  return (
    <div className="home">
        <FeaturedInfo/>
        <br/>
        <APIWidgets/>
    </div>
  )
}
