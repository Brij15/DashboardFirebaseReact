import "./featuredInfo.css";
import Calculator from "./Calculator";
import Clock from "./Clock";
import { UserAuth } from "../../context/AuthContext";

export default function FeaturedInfo() {
    // Get auth user's details (email address) via UserAuth
    const {user} = UserAuth();
    let emailAddress = user.email
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">User Information</span>
            <div>
            <span className="featuredMoney">Email:- {user && emailAddress}</span>
            </div>
            {/* <span className="featuredSub">Display Name:- {user && emailAddress.substr(0,(emailAddress.indexOf('@')))}</span> */}
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Calculator</span>
            <Calculator/>
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Clock</span>
            <Clock/>
        </div>
    </div>
  )
}
