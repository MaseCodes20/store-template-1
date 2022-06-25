import React from "react";

function Footer() {
  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="relative bottom-0 left-0 right-0 mt-40 max-w-[1200px] mx-auto py-14">
      <div className="md:flex justify-between ">
        <div>
          <div className="flex">
            <div className="text-left text-[12px] mr-6">
              <h1 className="font-bold uppercase">Company info</h1>
              <div className="flex flex-col">
                <button className="text-left mt-1">About Soccer Store</button>
                <button className="text-left mt-1">
                  Social Responsibility
                </button>
                <button className="text-left mt-1">Affiliate</button>
                <button className="text-left mt-1">Fashion Blogger</button>
                <button className="text-left mt-1">Supply Chain</button>
                <button className="text-left mt-1">Careers</button>
                <button className="text-left mt-1">Student Discount</button>
              </div>
            </div>

            <div className="text-left text-[12px] mx-6">
              <h1 className="font-bold uppercase">Help & support</h1>
              <div className="flex flex-col">
                <button className="text-left mt-1">Shipping Info</button>
                <button className="text-left mt-1">Returns</button>
                <button className="text-left mt-1">How to Order</button>
                <button className="text-left mt-1">How To Track</button>
                <button className="text-left mt-1">Size Guide</button>
                <button className="text-left mt-1">Soccer Store VIP</button>
              </div>
            </div>

            <div className="text-left text-[12px] mx-6">
              <h1 className="font-bold uppercase">Customer Care</h1>
              <div className="flex flex-col">
                <button className="text-left mt-1">Contact Us</button>
                <button className="text-left mt-1">Payment & Tax</button>
                <button className="text-left mt-1">Bonus Point</button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[540px] mt-5 md:mt-0">
          <div className="flex justify-between">
            <div className="text-left">
              {/* Find Us */}
              <h1 className="text-[10px] font-bold">FIND US ON</h1>
              {/* Socials */}

              <div className="flex mt-4">
                {" "}
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/81/81341.png"
                    alt="Facebook"
                    className="h-5 w-5 mr-2"
                  />
                </button>
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
                    alt="Instagram"
                    className="h-5 w-5 mx-2"
                  />
                </button>
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/733/733635.png"
                    alt="Twitter"
                    className="h-5 w-5 mx-2"
                  />
                </button>
                <button>
                  <img
                    src="https://flyclipart.com/thumb2/youtube-play-button-png-icon-free-download-394360.png"
                    alt="Youtube"
                    className="h-5 w-5 mx-2"
                  />
                </button>
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/25/25698.png"
                    alt="Pinterest"
                    className="h-5 w-5 mx-2"
                  />
                </button>
                <button>
                  <img
                    src="https://pnggrid.com/wp-content/uploads/2021/04/Snapchat-Logo-Black-1024x1012.png"
                    alt="SnapChat"
                    className="h-5 w-5 mx-2"
                  />
                </button>
                <button>
                  <img
                    src="https://pnggrid.com/wp-content/uploads/2021/04/TikTok-Logo-908x1024.png"
                    alt="Tiktok"
                    className="h-5 w-5 mx-2"
                  />
                </button>
              </div>
            </div>

            {/* Download */}
            <div className="ml-12 text-left">
              <p className="uppercase text-[10px] font-bold">
                download Soccer Store app to save more!
              </p>

              <div className="flex mt-4">
                <button>
                  <img
                    src="https://www.freepnglogos.com/uploads/apple-logo-png/apple-logo-png-dallas-shootings-don-add-are-speech-zones-used-4.png"
                    alt="Apple"
                    className="h-5 w-5 mr-2"
                  />
                </button>
                <button>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/38/38002.png"
                    alt="Android"
                    className="h-5 w-5 mx-2"
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Sign up */}
          <div className="text-left my-6">
            <p className="uppercase font-bold text-[10px]">
              Sign up for Soccer Store news
            </p>
            <form className="flex mt-2" onSubmit={submit}>
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 text-[12px] pl-3 border-0 border-l border-t border-b focus:ring-0 border-gray-300 focus:outline-none focus:border-black"
              />
              <input
                type="submit"
                value="SUBSCRIBE"
                className="bg-black text-white px-6 py-1 "
              />
            </form>
          </div>

          <div className="text-left">
            <p className="uppercase font-semibold mb-5">We Accept</p>

            <div className="grid grid-cols-11 gap-2 ">
              <img
                src="https://www.urbantool.com/wp-content/uploads/2016/12/paypal-logo-png.png"
                alt="paypal"
                className="h-5 mr-2"
              />
              <img
                src="https://logos-world.net/wp-content/uploads/2020/04/Visa-Emblem.jpg"
                alt="Visa"
                className="h-5 mr-2"
              />
              <img
                src="https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-1.png"
                alt="Mastercard"
                className="h-5 mr-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Maestro_2016.svg/616px-Maestro_2016.svg.png"
                alt="Maestro"
                className="h-5 mr-2"
              />
              <img
                src="https://mygoodknife.com/wp-content/uploads/American-Express-copy.png"
                alt="American Express"
                className="h-5 mr-2"
              />
              <img
                src="https://cdn4.iconfinder.com/data/icons/payment-method/160/payment_method_discover_network_card-512.png"
                alt="Discover"
                className="h-5 mr-2"
              />
              <img
                src="https://pngimage.net/wp-content/uploads/2018/05/bandeira-diners-club-png-3.png"
                alt="Diners club"
                className="h-5 mr-2"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Klarna_Payment_Badge.svg/2560px-Klarna_Payment_Badge.svg.png"
                alt="klarna"
                className="h-5 mr-2"
              />
              <img
                src="https://trinity-core.s3.us-west-1.amazonaws.com/fortunly/2349/Square-to-Buy-Australian-Fintech-Afterpay-in-%2429-Billion-Deal---Featured-Image.png"
                alt="Afterpay"
                className="h-5 mr-2"
              />
              <img
                src="https://zip.co/nz/wp-content/uploads/2021/08/logo-dark.svg"
                alt="Zip"
                className="h-5 mr-2"
              />
              <img
                src="http://assets.stickpng.com/images/60e7f964711cf700048b6a6a.png"
                alt="Google pay"
                className="h-5 mr-2"
              />

              <img
                src="https://demo.checkfront.com/images/payment/trustwave.png"
                alt="Trustwave"
              />
              <img
                src="https://appinventiv.com/wp-content/themes/twentynineteen-child/images/dmca-logo.png"
                alt="Dmca protected"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Copyrights */}
      <div className="text-left max-w-[440px] text-[12px]  mt-5 md:mt-0">
        <p>©2022 Soccer Store All Rights Reserved</p>
        <p>
          <span className="underline cursor-pointer mr-2">Privacy Center</span>{" "}
          |{" "}
          <span className="underline cursor-pointer mx-2">
            Privacy & Cookie Policy
          </span>{" "}
          |{" "}
          <span className="underline cursor-pointer mx-2">
            Do Not Sell My Personal Information
          </span>{" "}
          |{" "}
          <span className="underline cursor-pointer mx-2">
            Terms & Conditions
          </span>{" "}
          |{" "}
          <span className="underline cursor-pointer mx-2">
            Copyright Notice
          </span>{" "}
          | <span className="underline cursor-pointer mx-2">Accessibility</span>{" "}
          | <span className="underline cursor-pointer mr-2">Imprint</span> |{" "}
          <span className="underline cursor-pointer mx-2">United States</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
