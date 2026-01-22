
import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: 'walking-with-grace',
    title: 'Walking with Grace',
    subtitle: 'Finding Divine Peace in a Chaotic World',
    author: 'Sarah J. Matthews',
    price: 14.99,
    description: 'In a world that never stops moving, how do we find the stillness of God? This book explores practical spiritual disciplines for the modern believer.',
    coverImage: 'https://picsum.photos/seed/grace/600/900',
    introduction: `The sun had barely begun to crest over the horizon when I realized I couldn't do it anymore. The noise of the world—the notifications, the deadlines, the expectations—had drowned out the only voice that truly mattered. In the pages that follow, we will walk together through the valley of busyness to find the refreshing streams of Grace. This isn't just about meditation; it's about a complete realignment of the soul to its Creator.`,
    benefits: [
      'Learn 5 daily habits for spiritual clarity',
      'Biblical strategies for anxiety management',
      'Discover your unique spiritual temperament',
      'Monthly reflection guide included'
    ],
    testimonials: [
      { name: 'David R.', location: 'Texas', quote: 'This book changed the way I start my mornings. Truly a blessing.' },
      { name: 'Maria S.', location: 'London', quote: 'Finally, a practical guide that doesn\'t feel like another chore on my list.' }
    ],
    categories: ['Spiritual Growth', 'Peace', 'Christian Living']
  },
  {
    id: 'faith-like-mountains',
    title: 'Faith Like Mountains',
    subtitle: 'Moving the Obstacles to Your God-Given Purpose',
    author: 'Rev. Thomas Eldridge',
    price: 12.99,
    description: 'We are told faith can move mountains, but what if the mountain feels too heavy to even look at? Thomas Eldridge provides a roadmap for resilient faith.',
    coverImage: 'https://picsum.photos/seed/mountain/600/900',
    introduction: `We often treat faith like a feeling, but it is actually a muscle. When the mountains of life rise up before us—be it illness, financial ruin, or broken relationships—our first instinct is to flee. But God has called us to stand. In this introduction, I want to challenge your perspective on what a "mountain" really is. Is it an obstacle, or is it the very terrain God is using to strengthen your climb?`,
    benefits: [
      'Overcoming fear of the unknown',
      'Scriptural foundation for resilience',
      'Interactive journaling prompts',
      'Exclusive video session link'
    ],
    testimonials: [
      { name: 'Samuel K.', location: 'Kenya', quote: 'A powerful reminder of God\'s sovereignty during my darkest hours.' }
    ],
    categories: ['Faith', 'Purpose', 'Inspiration']
  },
  {
    id: 'the-quiet-voice',
    title: 'The Quiet Voice',
    subtitle: 'Hearing God in the Modern World',
    author: 'Elena Vance',
    price: 9.99,
    description: 'Elijah found God not in the fire or the wind, but in a still, small voice. Are you listening closely enough?',
    coverImage: 'https://picsum.photos/seed/quiet/600/900',
    introduction: `I used to think God was silent. I waited for thunderclaps and burning bushes. What I found instead was that God was speaking in the spaces between my thoughts. He was whispering in the quiet of the 3 AM feeding, in the silence of the library, and in the rhythm of my own breath. To hear Him, we must first learn to be silent ourselves. This book is a journey into that sacred silence.`,
    benefits: [
      'Practical listening exercises',
      'Historical perspectives on silent prayer',
      'Creating your own "Secret Place"',
      '30-day quietude challenge'
    ],
    testimonials: [
      { name: 'Linda T.', location: 'California', quote: 'Vance captures the essence of divine communion beautifully.' }
    ],
    categories: ['Prayer', 'Meditation', 'Quietness']
  },
  {
    id: 'morning-mercies',
    title: 'Morning Mercies',
    subtitle: '30 Days of Reflection and Renewal',
    author: 'Dr. Michael Cho',
    price: 11.99,
    description: 'Fresh mercies every morning. Start your day with a focused heart and a spirit prepared for whatever comes.',
    coverImage: 'https://picsum.photos/seed/morning/600/900',
    introduction: `Lamentations 3:22-23 tells us that His mercies are new every morning. But how often do we actually stop to receive them? Most of us wake up and immediately start checking our phones or worrying about our to-do lists. This devotional is designed to help you pause, breathe, and receive the specific mercy God has prepared for your today. You don't need an hour; you just need a willing heart.`,
    benefits: [
      'Daily 5-minute devotionals',
      'Key scripture memorization tools',
      'Evening gratitude prompts',
      'Digital prayer journal'
    ],
    testimonials: [
      { name: 'John P.', location: 'Ohio', quote: 'The perfect companion for my morning coffee. Concise and deep.' }
    ],
    categories: ['Devotional', 'Daily Bread', 'Reflection']
  },
  {
    id: 'unshakable-hope',
    title: 'Unshakable Hope',
    subtitle: 'Anchoring Your Soul in the Promises of God',
    author: 'Cynthia Rivers',
    price: 15.99,
    description: 'When the ground beneath you shakes, what remains? Discover the eternal promises that serve as an anchor for the soul.',
    coverImage: 'https://picsum.photos/seed/anchor/600/900',
    introduction: `Hope is not a wish. It is an anchor. In the ancient world, an anchor didn't just hold the ship steady; it prevented it from being smashed against the rocks during a storm. If you feel like you are drifting or being battered by the waves of life, it's time to check your anchor. In this introduction, we look at the difference between worldly optimism and biblical hope—a hope that cannot be shaken because its source is eternal.`,
    benefits: [
      'Study of 12 key biblical promises',
      'Anchor points for times of crisis',
      'Guided group study questions',
      'Bonus PDF: The Promise Map'
    ],
    testimonials: [
      { name: 'Bethany W.', location: 'Australia', quote: 'Rivers writes with such warmth and authority. I felt seen and comforted.' }
    ],
    categories: ['Hope', 'Theology', 'Encouragement']
  }
];
