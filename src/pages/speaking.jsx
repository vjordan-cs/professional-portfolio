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
        title="My first formal speaking event is right around the corner."
        intro="In November, I'll be guest speaker for the Texas State Common Experience Systems Thinking series."
      >
        <div className="space-y-20">
          <SpeakingSection title="University">
            <Appearance
              href=""
              title="Life as a First-Gen and Non-Traditional Student"
              description="My journey navigating young adulthood, finding the way back to academia, and discovering a passion for leadership along the way."
              event="TSU Common Experience"
              cta="Coming Soon on November 15th"
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
