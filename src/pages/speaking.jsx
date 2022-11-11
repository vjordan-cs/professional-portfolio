import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Speaking - Victoria Jordan</title>
        <meta
          name="description"
          content="In November, I'll be guest speaker for the Texas State Common Experience Systems Thinking series."
        />
      </Head>
      <SimpleLayout
        title="My biggest guest speaker event is right around the corner."
        intro="This month, I'll be a guest speaker for the Texas State Common Experience 'Systems Thinking' series."
      >
        <div className="space-y-20">
          <SpeakingSection title="Texas State University">
            <Appearance
              href=""
              title="Life as a First-Gen and Non-Traditional Student"
              description="My journey navigating young adulthood, finding the way back to academia, and discovering a passion for leadership along the way."
              event="TSU Common Experience"
              cta="Coming Soon on November 15th"
            />
            <Appearance
              href=""
              title="(Re)visiting First Generation Students Experiences in STEM Panelist"
              description="Discussion on the significance of attending a Hispanic Serving Intitution, how our interests for STEM came to fruition, our cultural histories and backgrounds, and how all these relate to our experiences in the classroom."
              event="TSU Professional Development Series"
              cta="November 10th, 2022"
            />
            <Appearance
              href=""
              title="Counter-Life Herstories Conference Guest Speaker"
              description="Event with nearly 500 K-12 students, illuminating hidden truths about women and girls of color in STEM+C professions."
              event="TSU Conference"
              cta="November 8th, 2022"
            />
            <Appearance
              href=""
              title="Cohost for The Future of Technology is Human with Dr. Deb Donig"
              description="The vision of a better world is at the heart of technological innovation. How can we take back a vision of technological production so that it more truly and equitably aligns with human values?"
              event="TSU Common Experience"
              cta="October 26th, 2022"
            />
          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
