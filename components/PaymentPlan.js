import React from "react";
import { RxDotFilled } from "react-icons/rx";

const PaymentPlan = () => {
  return (
    <div className="bg-[#ecebfc]" id="pricing">
      <div className="w-[90%] mx-auto py-10">
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col items-center">
            <h1 className="text-xl font-semibold">Choose the Plan</h1>
            <h1 className="text-2xl font-bold text-center">
              With Vantage CRM, Select the Plan That Best Suits Your Needs
            </h1>
            <h1 className="text-2xl font-bold text-center">
              and Grow Your Company
            </h1>
          </div>

          <div className="flex flex-col items-center justify-center gap-5 lg:flex-row">
            <div className="bg-white text-black rounded-[50px] w-full lg:w-[30%] flex flex-col items-center gap-y-5 py-5 px-4">
              <div className="flex flex-col items-center">
                <h1 className="text-xl">Standard Plan</h1>
                <h1 className="text-3xl font-bold">$297/Month</h1>
              </div>
              <ul className="flex flex-col text-xl font-semibold gap-y-3">
                <li className="flex items-center">
                  <RxDotFilled />
                  Business Automation
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Support 7 days a week
                </li>
                <li className="flex items-center">
                  <RxDotFilled />3 Users
                </li>
                <li className="flex items-center">
                  <RxDotFilled />1 Website & Funnel
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Hosting & SSL
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Phone and SMS System
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  100,000 Contacts
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Website Forms
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Surveys
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Team Tasks
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Sales Pipelines
                </li>
              </ul>
              <div className="flex flex-col gap-y-3">
                <button className="text-[#5322A7] bg-white px-20 py-2 rounded-3xl border">
                  Demo
                </button>
                <button className="text-white bg-gradient-to-r from-[#5311A7] to-[#932BFb] px-20 py-2 rounded-3xl border">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-b from-[#5311A7] to-[#932BFb] text-white rounded-[50px] w-full lg:w-[30%] flex flex-col items-center gap-y-5 py-5 px-4">
              <div className="flex flex-col items-center">
                <h1 className="text-xl">Premium Plan</h1>
                <h1 className="text-3xl font-bold">$599/Month</h1>
              </div>
              <ul className="flex flex-col text-xl font-semibold gap-y-3">
                <li className="flex items-center">
                  <RxDotFilled />
                  Business Automation
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Support 7 Days a Week
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Unlimited Users
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Websites & Funnels
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Premium Hosting & SSL
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  High Performance Server
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Phone and SMS System
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Unlimited Contacts
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Website Forms
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Surveys
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Sales Pipelines
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Calendars
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Appointments Booking
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Workflow Automation
                </li>
              </ul>
              <div className="flex flex-col gap-y-3">
                <button className="text-[#5322A7] bg-white px-20 py-2 rounded-3xl border">
                  Demo
                </button>
                <button className="text-white bg-gradient-to-r from-[#5311A7] to-[#932BFb] px-20 py-2 rounded-3xl border">
                  Subscribe
                </button>
              </div>
            </div>

            <div className="bg-white text-black rounded-[50px] w-full lg:w-[30%] flex flex-col items-center gap-y-5 py-5 px-4">
              <div className="flex flex-col items-center">
                <h1 className="text-xl">Professional Plan</h1>
                <h1 className="text-3xl font-bold">$799/Month</h1>
              </div>
              <ul className="flex flex-col text-xl font-semibold gap-y-3">
                <li className="flex items-center">
                  <RxDotFilled />
                  Business Automation
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Support 7 days a week
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  10 Users
                </li>
                <li className="flex items-center">
                  <RxDotFilled />5 Websites & Funnels
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Hosting & SSL
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Phone and SMS System
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Unlimited Contacts
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Website Forms
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Surveys
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Calendars
                </li>
                <li className="flex items-center">
                  <RxDotFilled />
                  Appointments Booking
                </li>
              </ul>
              <div className="flex flex-col gap-y-3">
                <button className="text-[#5322A7] bg-white px-20 py-2 rounded-3xl border">
                  Demo
                </button>
                <button className="text-white bg-gradient-to-r from-[#5311A7] to-[#932BFb] px-20 py-2 rounded-3xl border">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPlan;
