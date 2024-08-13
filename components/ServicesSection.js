import React from "react";

const ServicesSection = () => {
  return (
    <>
      {/* parent */}
      <div className="bg-gradient-to-r from-[#5311A7] to-[#932BFb] h-auto  min-h-screen w-full flex items-center py-12 px-4 md:px-8">
        {/* parent1 */}
        <div className="bg-[#fff] rounded-md w-full max-w-[1300px] mx-auto shadow-lg flex flex-col gap-y-12 p-6 md:p-12">
          {/* top */}
          <div className="text-center">
            <h1 className="text-[#5311A7] font-bold text-[24px] md:text-[36px] leading-tight md:leading-[55px]">
              Vantage's Business Automation Experts and
            </h1>
            <h1 className="text-[#5311A7] font-bold text-[24px] md:text-[36px] leading-tight md:leading-[55px]">
              Done-For-You (DFY) Service
            </h1>
            <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[29px] mt-4">
              Add an automation specialist to your team without paying for a new
              hire. You can save time and money by engaging external consultants
              by selecting our Professional or Premium Plan, which includes all
              these expert services.
            </p>
          </div>

          {/* bottom */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* left */}
            <div className="flex-1">
              <div className="mb-6">
                <h1 className="text-[#5311A7] text-[20px] md:text-[24px] font-semibold">
                  DFY Service Exclusive to Professional
                </h1>
                <h1 className="text-[#5311A7] text-[20px] md:text-[24px] font-semibold">
                  and Premium Plans
                </h1>
                <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px] mt-4">
                  We provide our special Done-For-You (DFY) service exclusively
                  to our Professional or Premium Plan customers. Our automation
                  specialists will collaborate closely with you to comprehend
                  your business objectives and implement a customized CRM system
                  tailored to meet your expectations. We take care of
                  everything, from the initial setup to developing sophisticated
                  automation, so you can concentrate on what you do best
                  managing your company.
                </p>
              </div>

              <div className="flex flex-col gap-y-4">
                <h1 className="text-[#5311A7] text-[20px] md:text-[24px] font-semibold">
                  DFY Service Benefits:
                </h1>
                <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                  • Eliminates the need to hire technical and automation
                  experts.
                </p>
                <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                  • Costs are reduced from $20-40 per hour.
                </p>
                <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                  • Provides expert setup and continuous service.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="flex-1">
              <h1 className="text-[#5311A7] text-[20px] md:text-[24px] font-semibold mb-4">
                Our DFY service includes a comprehensive range of activities to
                ensure your Vantage CRM system is perfectly tailored to your
                business needs:
              </h1>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  Automation Design:
                </span>{" "}
                Custom workflows and automation to streamline business
                processes.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  API Integrations:
                </span>{" "}
                Integration with other essential software for seamless data
                flow.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  Website Design:
                </span>{" "}
                Customization for optimal performance and brand alignment.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">Forms Design:</span>{" "}
                Custom forms for lead capture, feedback, and other business
                needs.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  Phone and SMS Setup:
                </span>{" "}
                Configuration for integrated customer communication.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  Calendar Setup:
                </span>{" "}
                Streamlined appointment scheduling and team coordination.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">Team Training:</span>{" "}
                Comprehensive training sessions for efficient CRM use.
              </p>
              <p className="text-black font-[400] text-[14px] md:text-[16px] leading-relaxed md:leading-[24px]">
                <span className="text-[#5311A7] font-bold">
                  Ongoing Support:
                </span>{" "}
                Continuous support and adjustments to align the CRM system with
                evolving business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesSection;
