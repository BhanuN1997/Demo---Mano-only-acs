/* eslint-disable react/no-unknown-property */
import React from "react";
import chatgpt from "../../public/images/chatgpt.png";
import bard from "../../public/images/bard.png";
import { data } from "../utils/data";
import Image from "next/image";
import Link from "next/link";
import introduction from "../../public/images/introduction.svg";

function Information({ id }: { id: string }) {
  return (
    <>
      <div className="text-[1.3rem] font-semibold ml-4">{data[id].heading}</div>
      {id !== "introduction" && (
        <div className="flex flex-col gap-7 p-4  w-[60%]">
          {data[id].info.map((information: any, index: number) => (
            <div
              key={index}
              className="flex flex-col p-4 rounded-2xl"
              style={
                information.note
                  ? {
                      border: "1px solid rgb(0,0,0,0.2)",
                      background: "rgb(242,166,230,0.2)",
                    }
                  : { border: "1px solid rgb(0,0,0,0.2)" }
              }
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
              {information.spimg && (
                <Image
                  src={information.spimg.src}
                  alt="image_"
                  className="max-w-[600px] w-[80%] h-auto ml-5 my-6 rounded-2xl"
                />
              )}
              {information.note && (
                <div className="text-base cursor-default text-[#454545bd]">
                  <div className="my-2">
                    <span className="rounded-md bg-[#e51616b9] text-white px-2 py-0.5">
                      Note:
                    </span>
                  </div>
                  <div className="text-sm">
                    This extension works only on websites
                    &#40;www.example.com&#41;. It is not effective:
                    <div className="flex flex-col gap-0.5 ml-2 mt-1">
                      <div>- New tabs without loaded websites</div>
                      <div>- Extension web store pages</div>
                      <div>- Extension://pages</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
      {id === "introduction" && (
        <div className="flex flex-col gap-6">
          <div
            className="flex flex-row justify-between p-6 rounded-xl"
            style={{ border: "1px solid rgb(0,0,0,0.1)" }}
          >
            <div className="flex flex-col w-[50%] gap-3">
              <div className="text-lg font-semibold">How to Activate</div>
              <div className="text-base font-semibold mt-4">
                {"a) Pin the extension"}
              </div>
              <div>{"You can pin the extension for quick access"}</div>
              <div className="text-base font-semibold mt-4">{"b) Login"}</div>
              <div>
                {
                  "The extension does not require you to pay any premium. It directly connects with your Bard and ChatGPT account"
                }
              </div>
              <div className="flex flex-row gap-8">
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
            </div>
            <div className="flex flex-">
              <Image
                src={introduction}
                alt="Login to Bard and ChatGPT"
                className="w-[90%] h-auto"
              />
            </div>
          </div>
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
                Screen Chat
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Information;
