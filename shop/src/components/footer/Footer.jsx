import React from "react";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { ImAppleinc } from "react-icons/im";

export const Footer = () => {
  return (
    <div className="flex justify-center w-full bg-black">
      <div className="flex justify-between w-full max-w-[1170px] h-[440px] text-white border-red-600 py-[80px]">
        <div className="flex flex-col gap-4">
          <p>Exclusive</p>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="flex px-2 py-3 border border-white bg-black">
            <input
              className="bg-black "
              placeholder="Enter your email"
              type="text"
            />
            <img src="./Vector.png" alt="" />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <p>Support</p>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <div>+88015-88888-9999</div>
        </div>

        <div className="flex flex-col gap-4">
          <p>Account</p>
          <p>My Account</p>
          <p>Login / Register</p>
          <p>Cart</p>
          <p>Wishlist</p>
          <p>Shop</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>

        <div className="flex flex-col gap-4">
          <p>Download App</p>
          <div className="flex gap-2">
            <img className="w-full h-full" src="./Qr Code.png" alt="" />
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-center rounded w-[130px] h-[50px] border-white border">
                <IoLogoGooglePlaystore />
                <div>
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm">Google Play</p>
                </div>
              </div>

              <div className="flex gap-3 items-center rounded w-[130px] h-[50px] border-white border">
                <ImAppleinc />
                <div>
                  <p className="text-xs">Download on the</p>
                  <p className="text-sm">App store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
