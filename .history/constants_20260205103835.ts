
import { Bug, Severity } from './types';

export const BUGS: Bug[] = [
  {
    id: '1',
    title: 'A logout button is needed.',
    description: 'After logging in, users should have a button to log out.',
    severity: Severity.CRITICAL,
    mediaUrl: '/items/vidio1.mp4',
    mediaType: 'video',
    dateReported: '2024-05-10'
  },
  {
    id: '2',
    title: 'Cart issue',
    description: 'Background should not scroll when clicking on the ‘Cart’.',
    severity: Severity.MEDIUM,
    mediaUrl: '/items/vidio2.mp4',
    mediaType: 'video',
    dateReported: '2024-05-12'
  },
  {
    id: '3',
    title: 'Round button',
    description: 'When the round button is clicked, should something happen? If nothing is supposed to happen, it shouldn’t navigate to the ‘Home’ page.',
    severity: Severity.HIGH,
    mediaUrl: '/items/vidio3.mp4',
    mediaType: 'video',
    dateReported: '2024-05-15'
  },
  {
    id: '4',
    title: 'Add a border',
    description: 'A border should be added to the message input field — this would be a great usability improvement for users.',
    severity: Severity.LOW,
    mediaUrl: '/items/rasm2.png',
    mediaType: 'image',
    dateReported: '2024-05-18'
  },
  {
    id: '5',
    title: 'Phone number format',
    description: 'Uzbek phone numbers should be written in the following format
+998 95 170 59 95
+998 93 322 56 89
+998 97 752 17 27',
    severity: Severity.CRITICAL,
    mediaUrl: '/items/rasm3.png',
    mediaType: 'image',
    dateReported: '2024-05-20'
  },
  {
    id: '6',
    title: 'Mobile Navigation Overlay Sticky',
    description: 'The hamburger menu stays open even after clicking a navigation link on iOS Chrome.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug6/800/450',
    mediaType: 'image',
    dateReported: '2024-05-22'
  },
  {
    id: '7',
    title: 'Inconsistent Date Formatting',
    description: 'Dates display as MM/DD/YYYY in the header but DD/MM/YYYY in the reports table.',
    severity: Severity.LOW,
    mediaUrl: 'https://picsum.photos/seed/bug7/800/450',
    mediaType: 'image',
    dateReported: '2024-05-25'
  },
  {
    id: '8',
    title: 'Broken Stripe Webhook Validation',
    description: 'Signature verification fails for valid checkout.session.completed events intermittently.',
    severity: Severity.HIGH,
    mediaUrl: 'https://picsum.photos/seed/bug8/800/450',
    mediaType: 'image',
    dateReported: '2024-05-28'
  },
  {
    id: '9',
    title: 'Zombie State in Multi-step Form',
    description: 'Refreshing on step 3 reverts some fields to step 1 values despite local storage persistence.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug9/800/450',
    mediaType: 'image',
    dateReported: '2024-06-01'
  },
  {
    id: '10',
    title: 'SVG Icon Color Collision',
    description: 'Dark mode icons disappear because they inherit the default stroke color which matches the background.',
    severity: Severity.LOW,
    mediaUrl: 'https://picsum.photos/seed/bug10/800/450',
    mediaType: 'image',
    dateReported: '2024-06-03'
  },
  {
    id: '11',
    title: 'Race Condition in Search Results',
    description: 'Rapid typing causes older search results to overwrite newer results due to late promise resolution.',
    severity: Severity.HIGH,
    mediaUrl: 'https://picsum.photos/seed/bug11/800/450',
    mediaType: 'image',
    dateReported: '2024-06-05'
  },
  {
    id: '12',
    title: 'Missing Alt Tags on Dynamic Images',
    description: 'Accessibility audit failed due to images fetched from the CDN lacking descriptive alt attributes.',
    severity: Severity.LOW,
    mediaUrl: 'https://picsum.photos/seed/bug12/800/450',
    mediaType: 'image',
    dateReported: '2024-06-07'
  },
  {
    id: '13',
    title: 'Broken "Forgot Password" Email Link',
    description: 'Token verification endpoint expects a UUID but the email link sends a base64 encoded string.',
    severity: Severity.CRITICAL,
    mediaUrl: 'https://picsum.photos/seed/bug13/800/450',
    mediaType: 'image',
    dateReported: '2024-06-10'
  },
  {
    id: '14',
    title: 'Table Pagination Offset Bug',
    description: 'Navigating to page 2 of 5 results in page 1 items being displayed again.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug14/800/450',
    mediaType: 'image',
    dateReported: '2024-06-12'
  },
  {
    id: '15',
    title: 'Ghost Click on Modal Close',
    description: 'Clicking the "X" on a modal also triggers the button underneath the modal backdrop.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug15/800/450',
    mediaType: 'image',
    dateReported: '2024-06-15'
  },
  {
    id: '16',
    title: 'Malformed JSON in Profile Export',
    description: 'User export CSV/JSON feature produces trailing commas that break standard parsers.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug16/800/450',
    mediaType: 'image',
    dateReported: '2024-06-18'
  },
  {
    id: '17',
    title: 'Unexpected Logout on Tab Switch',
    description: 'Browsing in a new tab occasionally invalidates the session cookie in the original tab.',
    severity: Severity.HIGH,
    mediaUrl: 'https://picsum.photos/seed/bug17/800/450',
    mediaType: 'image',
    dateReported: '2024-06-20'
  },
  {
    id: '18',
    title: 'Z-Index Issue with Tooltips',
    description: 'Tooltips are hidden behind the sticky header in the report detailed view.',
    severity: Severity.LOW,
    mediaUrl: 'https://picsum.photos/seed/bug18/800/450',
    mediaType: 'image',
    dateReported: '2024-06-22'
  },
  {
    id: '19',
    title: 'Large Payload API Rejection',
    description: 'User bio updates over 5000 characters are rejected by the reverse proxy before reaching the server.',
    severity: Severity.MEDIUM,
    mediaUrl: 'https://picsum.photos/seed/bug19/800/450',
    mediaType: 'image',
    dateReported: '2024-06-25'
  },
  {
    id: '20',
    title: 'Broken Theme Toggle Animation',
    description: 'Switching from Light to Dark mode causes a sudden flicker instead of the 300ms transition.',
    severity: Severity.LOW,
    mediaUrl: 'https://picsum.photos/seed/bug20/800/450',
    mediaType: 'image',
    dateReported: '2024-06-28'
  }
];
