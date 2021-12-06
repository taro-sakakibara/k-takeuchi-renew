const Concept: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 116 30"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[61px] md:h-[14px]
			sp:h-[calc(25/750*100vw)]
			"
    >
      <text
        id="CONCEPT"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          Concept
        </tspan>
      </text>
    </svg>
  )
}

const Lesson: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 94 29"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[48px] md:h-[14px]
			sp:h-[calc(24/750*100vw)]
			"
    >
      <text
        id="lesson"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          Lesson
        </tspan>
      </text>
    </svg>
  )
}

const Contact: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 109 29"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[58px] md:h-[14px]
			sp:h-[calc(24/750*100vw)]
			"
    >
      <text
        id="Contact"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          Contact
        </tspan>
      </text>
    </svg>
  )
}
const Faq: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 62 29"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[30px] md:h-[14px]
			sp:h-[calc(24/750*100vw)]
			"
    >
      <text
        id="FAQ"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          FAQ
        </tspan>
      </text>
    </svg>
  )
}
const Corse: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 82 29"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[42px] md:h-[14px]
			sp:h-[calc(24/750*100vw)]
			"
    >
      <text
        id="Corse"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          Corse
        </tspan>
      </text>
    </svg>
  )
}
const Instructor: React.FC = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 134 29"
      className="
			md:transform md:translate-y-[150%] md:rotate-[-90deg]
			md:w-[72px] md:h-[14px]
			sp:h-[calc(24/750*100vw)]
			"
    >
      <text
        id="Instructor"
        transform="translate(0 18)"
        fill="transparent"
        strokeWidth="0.3px"
        stroke="transparent"
        fontSize="24"
        fontFamily="ClassicoURW-Reg, Classico URW"
        letterSpacing="0.125em"
      >
        <tspan x="0" y="0">
          Instructor
        </tspan>
      </text>
    </svg>
  )
}

export function renderTitle(title: string) {
  switch (title) {
    case 'Concept':
      return <Concept />
    case 'Lesson':
      return <Lesson />
    case 'Contact':
      return <Contact />
    case 'Faq':
      return <Faq />
    case 'Corse':
      return <Corse />
    case 'Instructor':
      return <Instructor />
    default:
      break
  }
}
