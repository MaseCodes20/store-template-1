import React, { useEffect, useState } from "react";

const campaigns = [
  "https://www.prodirectsoccer.com/siteimages/Responsive/adidas/ace/top-banner-2.jpg",
  "https://images.ctfassets.net/3mv54pzvptwz/3CPEE4rRcU217wl8Wk0lE1/6a7df78ae086ad783a2c09152b86a2a1/banner-desktop-PUMA-BATMAN.jpg",
  "https://i.pinimg.com/originals/e1/92/2b/e1922b4e9f86754af249393af52bff84.jpg",
];

const campaignsTwo = [
  "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/oxbfzpqttpphbhkydyb7/nike-soccer.jpg",
  "https://marcommnews.com/wp-content/uploads/2019/04/Adidas_Banner-1024x384.jpg",
];

function Campaigns() {
  const [campaignArrayOne, setCampaignArrayOne] = useState(campaigns);
  const [campaignArrayTwo, setCampaignArrayTwo] = useState(campaignsTwo);
  const [displayCampaignOne, SetDispayCampaignOne] = useState(1);
  const [displayCampaignTwo, SetDispayCampaignTwo] = useState(1);

  useEffect(() => {
    const length = campaignArrayOne.length;

    setTimeout(() => {
      if (displayCampaignOne >= length) {
        SetDispayCampaignOne(1);
      } else {
        SetDispayCampaignOne(displayCampaignOne + 1);
      }
    }, 2000);
  }, [displayCampaignOne]);

  useEffect(() => {
    const lengthTwo = campaignArrayTwo.length;

    setTimeout(() => {
      if (displayCampaignTwo >= lengthTwo) {
        SetDispayCampaignTwo(1);
      } else {
        SetDispayCampaignTwo(displayCampaignTwo + 1);
      }
    }, 2000);
  }, [displayCampaignTwo]);
  return (
    <div className="max-w-[1400px] mx-auto my-10 cursor-pointer">
      <div className="flex justify-center items-center md:h-[1000px]">
        <img src={campaignArrayOne[displayCampaignOne - 1]} alt="Campaing" />
      </div>

      <div className="flex justify-center items-center md:h-[500px]">
        <img src={campaignArrayTwo[displayCampaignTwo - 1]} alt="Campaing" />
      </div>
    </div>
  );
}

export default Campaigns;
