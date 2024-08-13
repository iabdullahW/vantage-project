import React from "react";
import Image from "next/image";
import {
  MdOutlineAssuredWorkload,
  MdOutlineArrowOutward,
} from "react-icons/md";
import image2 from "./../public/assets/image2.jpg";
import image3 from "./../public/assets/image3.jpg";
import image4 from "./../public/assets/image4.jpg";
import image5 from "./../public/assets/image5.jpg";
import image6 from "./../public/assets/image6.jpg";
import image7 from "./../public/assets/image7.jpg";
import image8 from "./../public/assets/image8.jpg";
import image9 from "./../public/assets/image9.jpg";
import image10 from "./../public/assets/image10.jpg";

import logo1 from "./../public/assets/1.webp";
import logo2 from "./../public/assets/2.png";
import logo3 from "./../public/assets/3.png";
import logo4 from "./../public/assets/4.png";
import logo5 from "./../public/assets/5.webp";
import logo6 from "./../public/assets/6.webp";

const FeaturesSection = () => {
  return (
    <>
      <div className="bg-gradient-to-br from-[#5311A7] to-[#932BFb] text-white" id="features">
        <div className="w-[90%] mx-auto py-10">
          <div className="flex flex-col items-center gap-y-4">
            <h3 className="text-2xl opacity-95">Features</h3>
            <h1 className="text-3xl font-semibold text-center">
              Discover the Power Behind Quad
            </h1>
            <h1 className="text-3xl font-semibold text-center">
              Our Key Features
            </h1>
          </div>
          <div className="flex flex-col pt-5 gap-y-10">
            <div className="flex flex-wrap justify-between gap-4">
              <div className="box1 w-full md:w-[47%]  bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Insightful Reporting and Analytics
                </h1>
                <p>
                  Our CRM Reporting and Analytics provides comprehensive
                  reporting, customizable dashboards, and real-time analytics
                  for business success, tracking performance metrics and
                  analyzing trends.
                </p>
                <Image src={image2} alt="icon" className="h-[20rem] w-full" />
              </div>
              <div className="box2 w-full md:w-[47%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Intuitive Project Dashboard
                </h1>
                <p>
                  Our CRM dashboard simplifies business management by providing
                  real-time, comprehensive views of projects, tasks, and
                  milestones, ensuring organization and control over all
                  operations.
                </p>
                <Image src={image3} alt="image2" className="h-[20rem] w-full" />
              </div>
            </div>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="box3 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Efficient Calendar Management
                </h1>
                <p>
                  Schedule meetings in CRM with an integrated calendar, track
                  reminders, and stay organized, ensuring team members stay on
                  track with shared calendars and automated notifications.
                </p>
                <Image src={image4} alt="image3" className="h-[15rem] w-full" />
              </div>
              <div className="box4 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Dynamic Opportunity Management
                </h1>
                <p>
                  CRM application optimizes sales potential by tracking leads,
                  managing pipelines, and monitoring progress. Real-time updates
                  provide insights into sales performance, ensuring efficiency
                  and competitiveness.
                </p>
                <Image src={image5} alt="image4" className="h-[15rem] w-full  " />
              </div>
              <div className="box5 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col items-center gap-y-3">
                <h1 className="text-xl font-medium">
                  Powerful Marketing Automation
                </h1>
                <p>
                  Marketing automation tool that streamlines marketing efforts
                  by creating targeted campaigns, managing email marketing, and
                  tracking real-time engagement.
                </p>
                <Image src={image6} alt="image5" className="h-[15rem] w-full" />
              </div>
              <div className="box5 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Advanced Workflow Automation
                </h1>
                <p>
                  CRM application streamlines business processes with advanced
                  workflow automation features, enhancing efficiency and
                  productivity by automating repetitive tasks, setting triggers,
                  and ensuring consistent follow-ups.
                </p>
                <Image src={image7} alt="image5" className="h-[15rem] w-full" />
              </div>
              <div className="box5 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Streamlined Membership Management
                </h1>
                <p>
                  CRM tools streamline membership management, automate renewals,
                  and handle billing while personalizing communication and
                  monitoring engagement to enhance member relationships
                  efficiently.
                </p>
                <Image src={image8} alt="image5" className="h-[15rem] w-full" />
              </div>
              <div className="box5 w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Optimized Facebook Ads Management
                </h1>
                <p>
                  Our Facebook Ads management feature optimizes ad performance,
                  allowing for real-time targeting, strategy adjustments, and
                  improved ROI through seamless integration and comprehensive
                  insights.
                </p>
                <Image src={image9} alt="image5" className="h-[15rem] w-full" />
              </div>
              <div className="box5  w-full md:w-[30%] bg-[#9b86b3] text-white p-6 rounded-xl flex flex-col gap-y-3">
                <h1 className="text-xl font-medium">
                  Intuitive Project Dashboard
                </h1>
                <p>Stay in control with our user-friendly project dashboard.</p>
                <Image
                  src={image10}
                  alt="image10"
                  className="h-[15rem] w-full "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#edf7ff] text-black">
        <div className="w-[90%] mx-auto py-10">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col items-center pt-3 gap-y-4">
              <h3 className="text-2xl font-semibold opacity-95">
                Our Services
              </h3>
              <h1 className="text-3xl font-bold text-center">
                VANTAGE'S COMPREHENSIVE SUITE OF TOOLS
              </h1>
              <h1 className="text-3xl font-bold text-center">AND AUTOMATION</h1>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Invoice and Document Creation: Generate professional invoices
                  and documents with automated templates and customizable
                  options
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Email Marketing Campaigns: Design and execute targeted email
                  campaigns to engage and grow your audience.
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Google and Outlook Calendar: Sync and manage schedules
                  seamlessly with Google and Outlook calendar integrations.
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Sales Pipeline Automation: Automate and streamline sales
                  pipelines to enhance efficiency and close deals faster
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Payment Gateway Integration: Process payments and manage
                  transactions securely with PayPal, Stripe, Authorize, NMI, and
                  Razorpay
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Website Builder and Hosting: Create, customize, and host your
                  business website with an intuitive builder
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Automated Reminders: Set reminders to ensure no critical
                  deadline or task is missed
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Round Robin Appointment Scheduling System: Distribute
                  appointments evenly and simplify the booking process.
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  SMS and Phone System: Communicate directly with customers
                  through integrated SMS and phone call features.
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap justify-between gap-4">
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  System Internal Notifications: Keep your information with
                  real-time notifications and updates on critical activites
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Leads Distribution: Automatically distribute leads to optimize
                  follow-up and conversions
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
              <div className="box1 w-full md:w-[30%] bg-white text-black p-6 rounded-xl flex flex-col gap-y-3">
                <MdOutlineAssuredWorkload className="text-5xl bg-[#ecebfc] p-2 rounded-full" />
                <p>
                  Website Chat Widgets:Engage visitors in real time with an
                  integrated web chat widget
                </p>
                <div className="flex items-center gap-5">
                  <h1 className="font-bold">Learn More</h1>
                  <MdOutlineArrowOutward className="text-xl font-bold" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#5311A7] to-[#6214af] text-white">
        <div className="w-[90%] mx-auto py-10">
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col items-center pt-3 gap-y-4">
              <h1 className="text-3xl font-bold">
                TRUSTED BY INDUSTRY LEADERS
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-around gap-4">
              <Image src={logo1} alt="logo1" className="w-[15%] md:w-[10%]" />
              <Image src={logo2} alt="logo2" className="w-[15%] md:w-[10%]" />
              <Image src={logo3} alt="logo3" className="w-[15%] md:w-[10%]" />
              <Image src={logo4} alt="logo4" className="w-[15%] md:w-[10%]" />
              <Image src={logo5} alt="logo5" className="w-[15%] md:w-[10%]" />
              <Image src={logo6} alt="logo6" className="w-[15%] md:w-[10%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
