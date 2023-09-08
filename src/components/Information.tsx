/* eslint-disable react/no-unknown-property */
import React from "react";
import chatgpt from "../../public/images/chatgpt.png";
import bard from "../../public/images/bard.png";
import { data } from "../utils/data";
import Image from "next/image";
import intro from "../../public/images/intro.png";
import Link from "next/link";
import shortcuts from "../../public/images/shortcuts.png";
import introduction from "../../public/images/introduction.svg";

function Information({ id }: { id: string }) {
  return (
    <>
      <div className="text-[1.3rem] font-semibold ml-4">{data[id].heading}</div>
      {id !== "introduction" && (
        <div className="flex flex-col gap-7 p-4 w-[60%]">
          {data[id].info.map((information: any, index: number) => (
            <div
              key={index}
              className="flex flex-col p-4 rounded-2xl"
              style={{ border: "1px solid rgb(0,0,0,0.2)" }}
            >
              {information.heading && (
                <div className="text-[1.1rem] font-semibold">
                  {information.heading}
                </div>
              )}

              {information.img && (
                <Image
                  src={information.img.src}
                  alt="image_"
                  className="max-w-[600px] w-[80%] h-auto ml-5 my-6 rounded-2xl"
                />
              )}
              {information.content && (
                <div className="text-base text-[#5A6470] ml-5 my-2">
                  {information.content}
                </div>
              )}
              {information.points &&
                information.points.map((element: string, index: number) => (
                  <div
                    key={index}
                    className="text-base ml-5 my-1 text-[#5A6470]"
                  >
                    {element}
                  </div>
                ))}
              {information.note && (
                <div className="text-sm ml-5 my-3 text-[#5A6470]">
                  <span className="text-red-500">Note: </span>
                  {information.note}
                </div>
              )}
              {information.spimg && (
                <Image
                  src={information.spimg.src}
                  alt="image_"
                  className="max-w-[600px] w-[80%] h-auto ml-5 my-6 rounded-2xl"
                />
              )}
            </div>
          ))}
        </div>
      )}
      {id === "introduction" && (
        <div className="flex flex-col gap-6 text-[#5A6470]">
          <div className="flex flex-col gap-3 font-semibold mx-auto mt-3">
            <div className="text-sm">
              Save 5-8% of your day, but 70% on the part of the job you hate the
              most:{" "}
              <span className="text-[#AD0C0C]">
                inefficient and repetitive stuff
              </span>
            </div>
            <div className="flex flex-row gap-7 mx-auto cursor-default">
              <div
                className="py-2 px-6 rounded-md"
                style={{ border: "1px solid rgb(0,0,0,0.1)" }}
              >
                Press <span className="text-[#800DB6]">❛ALT + Q ❜</span> to get
                started
              </div>
              <div
                className="py-2 px-6 rounded-md"
                style={{ border: "1px solid rgb(0,0,0,0.1)" }}
              >
                Press <span className="text-[#800DB6]">❛ALT + W❜</span> for Full
                Screen
              </div>
            </div>
          </div>
          <div
            className="flex flex-row justify-between p-6 rounded-xl bg-[rgb(205,187,255,0.2)]"
            style={{ border: "1px solid rgb(0,0,0,0.1)" }}
          >
            <div className="flex flex-col w-[50%] gap-3">
              <div className="text-lg font-semibold text-black">
                How to Activate
              </div>
              <div className="text-base font-semibold mt-4 text-black">
                {"a) Pin the extension"}
              </div>
              <div className="ml-4">
                {"You can pin the extension for quick access"}
              </div>
              <div className="text-base font-semibold mt-4 text-black">
                {"b) Login"}
              </div>
              <div className="ml-4">
                {
                  "The extension does not require you to pay any premium. It directly connects with your Bard and ChatGPT account"
                }
              </div>
              <div className="flex flex-row gap-8 ml-4">
                <Link
                  target="_blank"
                  href="https://chat.openai.com/"
                  className="flex flex-row items-center gap-2"
                >
                  <Image src={chatgpt} alt="chatgpt" className="h-7 w-7" />
                  <div>Chat GPT</div>
                </Link>
                <Link
                  target="_blank"
                  href="https://bard.google.com/"
                  className="flex flex-row items-center gap-2"
                >
                  <Image src={bard} alt="bard" className="h-7 w-7" />
                  <div>Bard</div>
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <div className="text-base font-semibold mt-4 text-black">
                  {"c) Adjust shortcuts"}
                </div>
                <div className="flex flex-col ml-4 gap-2">
                  <div>{"Step 1: Go to: chrome://extensions/shortcuts"}</div>
                  <div>
                    {"Step 2: Change the shortcuts as per your convenience"}
                  </div>
                  <div className="2xl:text-base text-sm">
                    Note: If you are a Bing/Naver user, kindly replace "chrome"
                    with Bing or Naver. eg: Edge://extensions/shortcuts
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-16">
              <Image
                src={introduction}
                alt="Login to Bard and ChatGPT"
                className="w-[90%] h-auto"
              />
              <Image src={shortcuts} alt="" className="w-[90%] h-auto" />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;
