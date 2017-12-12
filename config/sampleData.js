const sampleData = [
  {
    name: "Campbell-Dacoscos",
    users: [
      {
        firstName: "Clay",
        lastName: "Campbell"
      },
      {
        firstName: "Reece",
        lastName: "Dacoscos"
      },
      {
        firstName: "Jennifer",
        lastName: "Campbell"
      }
    ],
    posts: [
      {
        content: "Hey, check out what the cats in the neighborhood are up to!",
        tags: ["cats", "family"],
        images: ["https://unsplash.com/photos/EcsCeS6haJ8"],
        user: [
          {
            firstName: "Clay",
            lastName: "Campbell"
          }
        ],
        comments: [
          {
            content: [
              "Uncle, you are such a cat lady lol",
              "Cuuuuute!!",
              "Whoa where did that cat come from?"
            ]
          }
        ]
      },
      {
        content: "Don't forget: Family Dinner this Saturday at 6 PM!",
        tags: ["family", "dinner"],
        images: ["https://unsplash.com/photos/NKJAaEGC-B4"],
        user: [
          {
            firstName: "Jennifer",
            lastName: "Campbell"
          }
        ],
        comments: [
          {
            content: [
              "Added to my calendar!",
              "Can I bring some champagne? I feel like celebrating!"
            ]
          }
        ]
      }
    ]
  }
]

module.exports = sampleData;