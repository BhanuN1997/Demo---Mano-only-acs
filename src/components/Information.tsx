/* eslint-disable react/no-unknown-property */
import React from "react";
import chatgpt from "../../public/images/chatgpt.png";
import bard from "../../public/images/bard.png";
import { data } from "../utils/data";
import Image from "next/image";

function Information({ id }: { id: string }) {
  return (
    <>
      {data[id].heading && (
        <p className="text-xl font-bold">{data[id].heading}</p>
      )}
      {data[id].info.map((element: any, index: any) => {
        return (
          <aside className="max-w-[70%] flex flex-col gap-3" key={index}>
            {element.alertnode && (
              <p className="font-normal text-[1.07rem] text-slate-500">
                <span className="text-red-700 font-bold">Note:</span> This
                extension is only operational on active websites{" "}
                <span className="font-semibold">{"(eg:www.....com)"}</span>. It
                is ineffective on: <br />
                - Current page <br />
                - New tabs without loaded websites <br />
                - Chrome Web Store pages <br />- Chrome://pages
              </p>
            )}
            {element.heading && (
              <p className="font-semibold text-lg">{element.heading}</p>
            )}

            {element.img && (
              <Image
                src={element.img.src}
                alt="image"
                className="w-[400px] 2xl:w-[525px] ml-6 h-auto shadow-sm my-8"
              />
            )}

            {element.content && (
              <p className="text-slate-500 ml-6 text-base">{element.content}</p>
            )}
            {element.quote && (
              <span className="text-slate-900 text-[1.3rem] ml-12 my-3 text-base">
                <span className="italic">
                  We automated legs, then arms, then fingers, and now brains
                </span>{" "}
                - Benedict Evans
              </span>
            )}
            {element.spimg && (
              <Image
                src={element.spimg.src}
                alt="image"
                className="w-[50vw] h-auto"
              />
            )}
            {element.link && (
              <iframe
                width="560"
                height="315"
                className="ml-6"
                src="https://www.youtube-nocookie.com/embed/OMOGaugKpzs"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            )}

            {element.greentext && (
              <p className="font-semibold text-lg text-green-700">
                {element.greentext}
              </p>
            )}
            {element.logindata && (
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-lg text-green-700 ml-6 mt-6">
                  Log in to ChatGPT and Bard if you haven&apos;t already:
                </p>
                <div className="flex flex-row gap-6 ml-6 mt-4 text-base font-normal">
                  <a
                    href="https://chat.openai.com/auth/login"
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-row items-center gap-1.5"
                  >
                    <Image
                      src={chatgpt}
                      alt="ChatGPT"
                      className="w-7 h-7 pointer"
                    />
                    <span>ChatGPT</span>
                  </a>
                  <a
                    href="https://bard.google.com/?hl=en"
                    rel="noreferrer"
                    target="_blank"
                    className="flex flex-row items-center gap-1.5"
                  >
                    <Image
                      src={bard}
                      alt="BardAI"
                      className="w-7 h-7 pointer"
                    />
                    <span>Bard</span>
                  </a>
                </div>
              </div>
            )}
          </aside>
        );
      })}
    </>
  );
}

export default Information;
