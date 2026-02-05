import { Bug, Severity } from "./types";

export const BUGS: Bug[] = [
  {
    id: "1",
    title: "A logout button is needed.",
    description: "After logging in, users should have a button to log out.",
    severity: Severity.CRITICAL,
    mediaUrl: "/items/vidio1.mp4",
    mediaType: "video",
    dateReported: "2024-05-10",
  },
  {
    id: "2",
    title: "Cart issue",
    description: "Background should not scroll when clicking on the ‘Cart’.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio2.mp4",
    mediaType: "video",
    dateReported: "2024-05-12",
  },
  {
    id: "3",
    title: "Round button",
    description:
      "When the round button is clicked, should something happen? If nothing is supposed to happen, it shouldn’t navigate to the ‘Home’ page.",
    severity: Severity.HIGH,
    mediaUrl: "/items/vidio3.mp4",
    mediaType: "video",
    dateReported: "2024-05-15",
  },
  {
    id: "4",
    title: "Add a border",
    description:
      "A border should be added to the message input field — this would be a great usability improvement for users.",
    severity: Severity.LOW,
    mediaUrl: "/items/rasm2.png",
    mediaType: "image",
    dateReported: "2024-05-18",
  },
  {
    id: "5",
    title: "Phone number format",
    description:
      "Uzbek phone numbers should be written in the following format: +998 95 170 59 95, +998 93 322 56 89, +998 97 752 17 27",
    severity: Severity.CRITICAL,
    mediaUrl: "/items/rasm3.png",
    mediaType: "image",
    dateReported: "2024-05-20",
  },
  {
    id: "6",
    title: "Input text",
    description:
      "If this input is only used for searching courses, the placeholder can be something like: “Search our courses” or a similar variation.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm4.png",
    mediaType: "image",
    dateReported: "2024-05-22",
  },
  {
    id: "7",
    title: "Alignment issue",
    description:
      "Everything should be aligned evenly. The object marked with the red line is positioned lower than the others — all elements should be on the same level.",
    severity: Severity.LOW,
    mediaUrl: "/items/rasm1.png",
    mediaType: "image",
    dateReported: "2024-05-25",
  },
  {
    id: "8",
    title: "Problem with clearing filters",
    description:
      'Something was searched through the search input and something was selected from the filter. Then, when the Clear All Filters button is clicked, the words in the search input are also being cleared. If the search input also needs to be cleared, there should be a separate Clear All" button.',
    severity: Severity.HIGH,
    mediaUrl: "/items/vidio5.mp4",
    mediaType: "video",
    dateReported: "2024-05-28",
  },
  {
    id: "9",
    title: "Problem with Clear All Filters",
    description:
      "When entering a course from the Home page, clicking the (Clear All Filter) button does not clear all the filters.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio4.mp4",
    mediaType: "video",
    dateReported: "2024-06-01",
  },
  {
    id: "10",
    title: "Problem with the search input",
    description:
      "When a word is typed in the search input, the “x” button and the search icon overlap each other.  ",
    severity: Severity.LOW,
    mediaUrl: "/items/rasm5.png",
    mediaType: "image",
    dateReported: "2024-06-03",
  },
  {
    id: "11",
    title: "Suggestion",
    description:
      "It would be more convenient for users if clicking on the image takes them to the course.",
    severity: Severity.HIGH,
    mediaUrl: "/items/rasm6.png",
    mediaType: "image",
    dateReported: "2024-06-05",
  },
  {
    id: "12",
    title: "Suggestion",
    description:
      "An icon should be placed on the left or right for better user convenience.",
    severity: Severity.LOW,
    mediaUrl: "/items/rasm7.png",
    mediaType: "image",
    dateReported: "2024-06-07",
  },
  {
    id: "13",
    title: "Problem with the search button",
    description:
      "When the search button is clicked, the background should stay in one place.",
    severity: Severity.CRITICAL,
    mediaUrl: "/items/vidio6.mp4",
    mediaType: "video",
    dateReported: "2024-06-10",
  },
  {
    id: "14",
    title: 'Problem with "Article Review"',
    description:
      'When I click the "Article Review" button in the Home section, it says "You are already logged in." But when I click the "Article Review" button in the About section, it takes me to a specific page.',
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio7.mp4",
    mediaType: "video",
    dateReported: "2024-06-12",
  },
  {
    id: "15",
    title: "Suggestion",
    description:
      'When navigating to the YouTube page, opening it with target="_blank" would make it much more convenient for the user.',
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio8.mp4",
    mediaType: "video",
    dateReported: "2024-06-15",
  },
  {
    id: "16",
    title: "Bug after searching",
    description:
      "A course is found through the search, but when the search button is clicked again, all courses are displayed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio9.mp4",
    mediaType: "video",
    dateReported: "2024-06-18",
  },
  {
    id: "17",
    title: "Unclear behavior",
    description:
      "When the actions in the video are done quickly and the Clear All Filters button is clicked, it navigates to an unknown page.",
    severity: Severity.HIGH,
    mediaUrl: "/items/vidio10.mp4",
    mediaType: "video",
    dateReported: "2024-06-20",
  },
  {
    id: "18",
    title: "Problem with displaying courses",
    description:
      "There are 3 courses, but 2 identical courses are shown at the bottom.",
    severity: Severity.LOW,
    mediaUrl: "/items/vidio11.mp4",
    mediaType: "video",
    dateReported: "2024-06-22",
  },
  {
    id: "19",
    title: "Image inconsistency",
    description:
      "The images here are different. Logically, they should be the same.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/birxil.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
  {
    id: "20",
    title: "Extra characters...",
    description:
      "I tried to edit a review, wrote Im funny and after saving, meaningless characters were added.",
    severity: Severity.LOW,
    mediaUrl: "/items/vidio12.mp4",
    mediaType: "video",
    dateReported: "2024-06-28",
  },
  {
    id: "21",
    title: "Problems in the Learning section",
    description:
      'There are several minor issues only in the Learning section. When entering the Learning section, the navbar should indicate it is active by changing color. Also, in the navbar, the "Enroll Now" button has been replaced by a user icon. Cart icon not',
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio14.mp4",
    mediaType: "video",
    dateReported: "2024-06-25",
  },
  {
    id: "22",
    title: "Problem with rating",
    description:
      "It says that 2 ratings have been given in other places, but in the Home section, this is not the case.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm9.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
  {
    id: "23",
    title: "Suggestion",
    description:
      "The account avatar should be enlarged and placed side by side with the user information.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm10.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
  {
    id: "24",
    title: "Image inconsistency",
    description:
      "The images here are different. Logically, they should be the same.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio15.mp4",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
  {
    id: "25",
    title: "Problem with the modal",
    description:
      "When the (Share This Course) button is clicked, the modal stays behind the courses.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio15.mp4",
    mediaType: "video",
    dateReported: "2024-06-25",
  },
  {
    id: "26",
    title: "Problem with Completed Courses",
    description:
      "There is 1 course in Completed Courses, but at the bottom it shows 12/4, 33% complete. I marked this course as completed using the button, which is why it appears in Completed Courses.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm11.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
  {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Settings not working",
    description:
      "",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/vidio16.mp4",
    mediaType: "video",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },
    {
    id: "27",
    title: "Phone Number",
    description:
      "The phone number field should be restricted, meaning a maximum of 15 digits can be entered and letters should not be allowed.",
    severity: Severity.MEDIUM,
    mediaUrl: "/items/rasm12.png",
    mediaType: "image",
    dateReported: "2024-06-25",
  },

  
];
