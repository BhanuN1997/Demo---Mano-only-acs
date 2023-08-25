import imgA from "../../public/demo-images/a.png";
import imgB from "../../public/demo-images/b.png";
import imgC from "../../public/demo-images/c.png";
import imgD from "../../public/demo-images/d.png";
import imgE from "../../public/demo-images/e.png";
import imgF from "../../public/demo-images/f.png";
import imgG from "../../public/demo-images/image.jpg";
import settings from "../../public/images/settings.png";

export const data: any = {
  introduction: {
    info: [
      {
        page1: true,
      },
    ],
  },
  chatwindow: {
    heading: "Chat Window",
    info: [
      {
        heading: "a) Switch between Bard and ChatGPT",
        content:
          "Alternate between using Bard and ChatGPT for a change of perspective.",
        img: { exists: true, src: imgA },
      },
      {
        heading: "b) Full Screen",
        content:
          "This is to exit sidebar chat mode and enter fullscreen chat mode",
        img: { exists: true, src: imgB },
      },
      {
        heading: "c) Content Selector",
        content:
          "Turn on Div Selecter. After the chat window closes, click on any selection of the text to select and use it in the chat",
        img: { exists: true, src: imgC },
      },
      {
        heading: "d) Custom Prompts",
        content:
          "Add new pre-saved prompts for the chat window. You can create and save new prompts.",
        img: { exists: true, src: imgD },
      },
      {
        heading: "e) Chat with site",
        content:
          "Click on the globe icon to get the context of the page that you are reading and to ask Bard any questions about the same.",
        img: { exists: true, src: imgE },
      },
      {
        heading: "f) Chat with PDF",
        content:
          "Click on the page icon to access this feature, wherein you can upload any PDF from your computer and chat with it.",
        img: { exists: true, src: imgF },
      },
    ],
  },
  saveandorganize: {
    heading: "ALT + S  Organizer",
    info: [
      {
        content:
          "1. Alt + S is an email & Link automation feature. You can save your most-used text messages and links, and access them quickly using the Alt + S keyboard shortcut.\n2. Once you oppress Alt + S in the text field, you can search for the shortcut using the Shortcut Key you assigned to it.",
      },
      {
        spimg: { exists: true, src: imgG },
      },
    ],
  },

  settings: {
    heading: "Setting and FAQ",
    info: [
      {
        heading: "a) Helper component from all websites",
        content:
          "Toggle the switch to turn on helpers. While using leetcode or GeeksForGeeks, two buttons called 'Answer' and 'Hint' will appear. Click on 'Answer' to get the solution to the problem and use the 'Hint' button to get a hint.",
      },
      {
        heading: "b) Summarizer",
        content:
          "Toggle the switch to turn on the summarizer. A button called 'Summarize' will appear on the top right corner when you visit a website. Hit the button and use the slider to adjust the understanding level and length of the summary.",
      },
      {
        heading: "c) Floating plus button",
        content:
          "Toggle the switch to disable the floating icon entirely. This means you won't be able to see the floating icon on any website.",
      },
      {
        heading: "d) On select floating option",
        content: "Toggle the switch to disable higher features entirely.",
      },
      {
        heading: "e) Google search page helper",
        content:
          "Toggle the switch to turn off the search page helper. If you turn this off, you will not see A.I. results alongside your search results.",
      },
      {
        heading: "f) BlackList a Website For Floating Icon",
        content:
          "If you don't want to see our floating icon on certain websites, enter the URL here to disable floating icon on those websites.",
      },
      {
        heading: "g) Disable A Website For Summary Button",
        content:
          "If you don't want to see the summarizer on certain websites, enter the URL here to disable summarizer on those websites.",
      },
      {
        heading: "h) BlackList a Website For Highlighter",
        content:
          "If you don't want the highlight feature on certain websites, enter the URL here to disable highlighter on those websites.",
      },
      {
        spimg: { exists: true, src: settings },
      },
    ],
  },
};
