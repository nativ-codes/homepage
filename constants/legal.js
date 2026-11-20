export const XidoPrivacyPolicy = {
  title: 'Privacy Policy',
  lastUpdated: 'Last Updated: 11 May 2025',
  sections: [
    {
      title: 'Introduction',
      content:
        "This Privacy Policy describes how Xido('we,' 'us,' or 'our') collects, uses, and shares information when you use our mobile application for tracking Dividend Growth Investing(DGI) portfolios based on CSV data exported from the XTB broker platform. We respect your privacy and are committed to protecting it."
    },
    {
      title: 'Data Collection',
      sections: [
        {
          content:
            'User-Provided Data: Xido requires you to upload CSV transaction files exported from the XTB broker platform. This data is only used locally on your device to analyze and generate portfolio statistics.'
        },
        {
          content:
            "Third-Party Data: To enhance Xido's functionality, we retrieve additional data, such as real-time market information on companies and stock prices, from a third-party provider. This information is used solely for in-app calculations and analysis."
        },
        {
          content:
            "Analytics Data: Xido uses Mixpanel for user analytics, collecting anonymous information about App usage(e.g., features accessed, time spent in Xido). This data does not include personally identifiable information and is used solely to help us improve Xido's user experience."
        }
      ]
    },
    {
      title: 'Data Storage',
      content:
        'All user-provided and generated data(such as analytics, CSV data, and third-party data) is stored solely on your device. Xido does not store, transfer, or back up data to any cloud or external server, nor do we have any access to the data stored on your device.'
    },
    {
      title: 'Third-Party Services',
      content: 'We use third-party services to enhance your experience, including:',
      sections: [
        {
          content:
            'Third-Party Data Providers: Xido retrieves financial and market data from third-party providers to supplement the CSV transactions you import. While we strive to use reliable sources, we cannot guarantee the accuracy or completeness of third-party data.'
        },
        {
          content:
            "Mixpanel Analytics: Mixpanel anonymously tracks App usage to help us improve Xido. This data does not identify individual users, and Mixpanel's Privacy Policy applies to their handling of analytics data."
        }
      ]
    },
    {
      title: 'Data Security',
      content:
        'We implement standard security practices to help keep your data safe on your device. However, we cannot guarantee the absolute security of your information due to the inherent nature of digital networks.'
    },
    {
      title: 'User Rights',
      content:
        'Since all user data is stored on your device, you have full control over it. You may delete Xido to permanently remove all associated data from your device.'
    },
    {
      title: "Children's Privacy",
      content:
        'Xido is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have inadvertently collected such information, we will take steps to delete it.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content:
        'We may update this Privacy Policy periodically. Any changes will be posted in Xido, and continued use of the app will constitute acceptance of any changes.'
    },
    {
      title: 'Contact Us',
      content:
        'If you have questions about this Privacy Policy or your privacy rights, please contact us at hello@nativ.codes.'
    }
  ]
};

export const ZaveitPrivacyPolicy = {
  title: "Privacy Policy",
  lastUpdated: "Last Updated: 7 November 2026",
  sections: [
    {
      title: "1. Introduction",
      content:
        "This Privacy Policy describes how ZaveIt collects, uses, and protects your information when you use the app, and when someone visits one of your Published Lists. By using ZaveIt, you agree to the practices described in this policy.",
    },
    {
      title: "2. Information We Collect",
      sections: [
        {
          content:
            "Google Account Information: When you sign in using Google, we collect your Google ID, display name, and email address via Firebase Authentication.",
        },
        {
          content:
            "Apple Account Information: When you sign in using Apple, Apple shares an ID, your email address (which may be a private relay address), and your name if you choose to share it, via Firebase Authentication.",
        },
        {
          content:
            "Post Content: When you share a post, we collect the title, URL, thumbnail (if available), and author (if provided).",
        },
        {
          content:
            "Post Pictures: We keep a copy of each post's picture so it can be shown on your Published Lists.",
        },
        {
          content:
            "Lists: If you create Lists, we store your Username, each List's name and Tags, and a hashed form of each List Password.",
        },
        {
          content:
            "AI-Generated Tags: We use a large language model to generate up to 3 tags based on the post title.",
        },
        {
          content:
            "App Usage Data: We may collect anonymized data related to how you interact with ZaveIt to help improve app functionality and user experience.",
        },
      ],
    },
    {
      title: "3. How We Use Your Information",
      sections: [
        {
          content:
            "To authenticate users and manage accounts through Firebase Authentication.",
        },
        {
          content:
            "To store, display, and organize user-submitted posts and generated tags.",
        },
        {
          content:
            "To show your Published Lists to anyone you give a List Password to.",
        },
        {
          content:
            "To improve and personalize the user experience and functionality of the app.",
        },
        {
          content: "To comply with legal requirements, if necessary.",
        },
      ],
    },
    {
      title: "4. Data Storage and Security",
      content:
        "We store your data securely using Firebase Firestore and Authentication. Post pictures are stored with Cloudflare. Anyone with a picture's link can open it, because the List Password protects the List page, not the picture file. A picture is deleted within about 30 days of deleting its post, and right away when you delete your account. Reasonable technical and organizational safeguards are in place to protect your information from unauthorized access, loss, or misuse.",
    },
    {
      title: "5. Sharing of Information",
      content:
        "We do not sell or rent your personal data. We share it only with the services that help operate the app, listed below, or when required by law:",
      sections: [
        {
          content: "Google Firebase: sign-in and database.",
        },
        {
          content:
            "DeepSeek: generates tags from post titles. DeepSeek is a provider based in China.",
        },
        {
          content: "Cloudflare: stores and serves post pictures, and DNS.",
        },
        {
          content:
            "Our server provider: hosts the ZaveIt API and the Published List pages.",
        },
      ],
    },
    {
      title: "6. Visitors",
      content:
        "A Visitor is anyone who opens a Published List in a browser. Visitors do not need an account.",
      sections: [
        {
          content:
            "IP Address: Used only to limit password guesses. It is not stored after that.",
        },
        {
          content:
            "Access Token: After the correct List Password is entered, a token is kept in the browser tab for up to 24 hours and is dropped when the tab is closed.",
        },
        {
          content: "No cookies and no analytics are used on Published List pages.",
        },
      ],
    },
    {
      title: "7. Your Rights",
      sections: [
        {
          content:
            "Access: You can request to access the personal data we hold about you.",
        },
        {
          content:
            "Correction: You may request corrections to inaccurate or incomplete data.",
        },
        {
          content:
            "Deletion: You can delete your account and all associated data directly from the app.",
        },
        {
          content:
            "Objection: You can object to certain types of data processing, where applicable.",
        },
      ],
    },
    {
      title: "8. Account and Data Deletion",
      content:
        "You can permanently delete your account and all associated data at any time from within the app. This includes your Lists, Username, and post pictures. Once deleted, the data cannot be recovered.",
    },
    {
      title: "9. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Significant changes will be communicated through the app. Continued use of ZaveIt after updates means you accept the updated policy.",
    },
    {
      title: "10. Contact",
      content:
        "If you have questions or concerns about this Privacy Policy, please contact us at hello@nativ.codes",
    },
  ],
};

export const HexplorePrivacyPolicy = {
  title: 'Privacy Policy',
  lastUpdated: 'Last Updated: 28 October 2026',
  sections: [
    {
      title: 'Introduction',
      content:
        "This Privacy Policy describes how Hexplore ('we,' 'us,' or 'our') collects, uses, and shares information when you use our mobile application, a hex-map city builder. We respect your privacy and are committed to protecting it."
    },
    {
      title: 'Data Collection',
      sections: [
        {
          content:
            'Gameplay Data: As you play, Hexplore stores your current run, previous run, and local leaderboard times (map size, finish time, and date) on your device. This data is generated by the app as you play. We do not ask for your name, email address, location, contacts, photos, or any other personal information.'
        },
        {
          content:
            'Third-Party Data: Hexplore does not retrieve data from third-party providers. The app works fully offline and does not send gameplay data off your device.'
        },
        {
          content:
            'Analytics Data: Hexplore does not use analytics, advertising, crash reporting, or tracking services. We do not collect device identifiers or usage statistics.'
        }
      ]
    },
    {
      title: 'Data Storage',
      content:
        'All gameplay data is stored solely on your device. Hexplore does not store, transfer, or back up data to any cloud or external server, nor do we have any access to the data stored on your device.'
    },
    {
      title: 'Third-Party Services',
      content:
        'Hexplore does not include third-party analytics, advertising, or data-provider SDKs. If you download Hexplore from the Apple App Store or Google Play, those stores may collect information under their own privacy policies. We do not receive that information from them for use in Hexplore.'
    },
    {
      title: 'Data Security',
      content:
        'Gameplay data never leaves your device, which is the primary way we protect it. We cannot guarantee the absolute security of information stored on a device you control.'
    },
    {
      title: 'User Rights',
      content:
        'Since all user data is stored on your device, you have full control over it. You may delete Hexplore to permanently remove all associated data from your device.'
    },
    {
      title: "Children's Privacy",
      content:
        'Hexplore is not directed at children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have inadvertently collected such information, we will take steps to delete it.'
    },
    {
      title: 'Changes to This Privacy Policy',
      content:
        'We may update this Privacy Policy periodically. Any changes will be posted on this page, and continued use of the app will constitute acceptance of any changes.'
    },
    {
      title: 'Contact Us',
      content:
        'If you have questions about this Privacy Policy or your privacy rights, please contact us at hello@nativ.codes.'
    }
  ]
};