import React from 'react';

const imgUrlRoot = 'http://localhost:3001/organImages/'

const initialData = [
  {
    id: 1,
    organ: "brain",
    title: "Headquartered in the Nerve Centre",
    image: `${imgUrlRoot + 'Brain.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Brain_tn.jpg'}`,
    quotation: "'It is certainly now common knowledge that the brain, even although a physical organ, bears some intimate relation to the mind; and this knowledge is manifestly embodied in common idiom. When referring to admittedly mental happenings or conditions we speak of racking one’s brains, picking another’s brains, having it on the brain, having a good brain or, contrariwise, being all brawn and no brain; and so on.' - CV Borst",
    top: "7%",
    left: "51.7%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'Walt Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas. Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content:
        `
        The brain is wider than the sky,
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson
        `
      },
    ]
  },
  {
    id: 2,
    organ: "hand",
    title: "Manoeuvre, Manufacture, Manipulate",
    image: `${imgUrlRoot + 'Hand.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Hand_tn.jpg'}`,
    quotation: "'Possession of a fully developed hand profoundly transformed the relationship of the human being to its own body, thus altering the relationship between humans and the natural world. The interaction of the hand with the rest of the body brought about self-consciousness and laid the foundations for the unique sense of agency that is experienced by humans.' - of Raymond Tallis",
    top: "46%",
    left: "75.4%",
    tabs: [
      {name: "The Body Politic", content: `'"All hands on deck" is what a skipper calls for when all his/her crew are required aboard to help manoeuvring the ship. It means that everybody has to join forces to overcome navigational difficulties: "All hands on deck" means "collective action". This book is about collective action; not aboard a ship, but in the management of the coastal waters. Growing demands for entry to the coastal waters by a variety of uses, such as fisheries, aquaculture, shipping, recreation and nature conservation, have resulted in a number of problems, including resource degradation and conflicts. The presence of a range of management regimes to co-ordinate different claims has not prevented these problems from occurring. Increasingly, stakeholders all over the world are realising that to deal with such problems all hands are needed on deck.' - Nathalie A Steins`},
      {name: "Out of Body Experience", content: `'Each morning begins with a ritual dash through our own private obstacle course - objects to be opened or closed, lifted or pushed, twisted or turned, pulled, twiddled, or tied, and some sort of breakfast to be peeled or unwrapped, toasted, brewed, boiled, or fried. The hands move so ably over this terrain that we think nothing of the accomplishment. Whatever your own particular early-morning routine happens to be, it is nothing short of a virtuoso display of highly choreographed manual skill.' - Frank R Wilson`},
      {name: "Corpus Delicti", content:`'I thought I might need to know Blackford's hand and I set out to learn it. Not in a day, monsieur, nor a week, like your common forger, and with an untried hand - but in a year, and years - with a hand that obeys me, I went over and over every letter of every word until I could write the man's hand, not an imitation of it, monsieur, not that, but the very hand itself - the very hand that Blackford writes with his own fingers. And it was well, for I was able to get the child all that Blackford had, beyond his debts, by a letter that no man could know that Blackford did not write.' - Melville Davisson Post`},
      {name: "Foreign Body", content: `'Il était un peu plus de midi et nous efforcions tous les trois de trouver le sommeil. La dernière chose dont je me souvienne, c'est de la main de Mona, sur le parquet, entre no deux matelas. Cette main-là, dans mon demi-sommeil, prenait une signification inouïe. Pendant tout un temps, je me suis demandé si j'allais oser avancer ma main pour la toucher comme par inadvertance.' - Georges Simenon`},
      {name: "The Body Text", content: `
          Keep me like a jewel
          I'm the only one
          Curled around your finger
          The only one

          And hold me in your hand
          I'm the only one
          I'm lit up like a candle
          The only one

                      American Analog Set`
      },
    ]
  },
  {
    id: 3,
    organ: "gut",
    title: "A Hunger and an Instinct",
    image: `${imgUrlRoot + 'Gut.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Gut_tn.jpg'}`,
    quotation: `'Embedded in the expression "gut feeling" is the notion that the gut is the first part of the body to respond to the environment, producing an emotional sixth sense that governs rational thought processes. This concept is not so foreign to our current physiological models in which the intestinal tract from mouth to anus is described as an exterior organ that mediates between the outside world and the internal viscera, with the intestinal epithelium providing an immunological gateway between self and other.' - M Mathias and AM Moore`,
    top: "38%",
    left: "42%",
    tabs: [
      {name: "The Body Politic", content: `'The message conveyed by this historical narrative is one that can be described using the aphorism “No Guts, No Glory”, popularized by US Air Force general Frederick C Bless in his book carrying this title, or the expression “No Pain, No Gain”, which is now used in various circles to convey the idea that those who want progress should be prepared to make sacrifices and endure suffering . It is in this way, in the name of being tough enough to restore the nation’s old glory and/or natural supremacy that Populist Right-Wing Party leaders seek to promote an alternative state symbology, and justify their calls for harsher immigration and asylum policies.' - Frank Mols and Jolanda Jetten`},
      {name: "Out of Body Experience", content: `'I am quite a wise old bird, but I am no desert hermit who can only prophesy when his guts are knotted with hunger. I am deep in the old man's puzzle, trying to link the wisdom of the body with the wisdom of the spirit until the two are one. At my age you cannot divide spirit from body without anguish and destruction, from which you will speak nothing but crazy lies.' - Robertson Davies`},
      {name: "Corpus Delicti", content:`'He disappeared into the shadows and reappeared holding a lancet that he delicately inserted into the corpse's mouth. They were all leaning over the body and all distinctly heard the instrument make a metallic, clinking sound. The doctor persisted in his task for some time. When he removed the tweezers he had succeeded in collecting a sample of a grey-back substance that he raised above his head. "This man has a lead stomach. He was killed, tortured, slaughtered even... He was made to swallow molten lead, which burnt up his insides, made hi head shrink and destroyed his entrails."' - Jean-François Parot`},
      {name: "Foreign Body", content: `'Me han clavado un puñal largo y frío en el éstomago hay alguien, hay otro que me ha clavado un acero en las entrañas: huelo ese incienso y estoy cansado. Yo dejo que hagan. Que me levanten pesadamente, mientras gimo. No les debo la vida a ustedes. No puedo, no puedo, no elegí, el dolor me dobla la cintura.' - Carlos Fuentes`},
      {name: "The Body Text", content: `
          I had not vomited in so long
          Someone put the hex on my true-to-selfness
          Some sorcerer kept me far from my guts
          The guts I feared would choke me
          And make me ashamed of having no wings
          And drown my own heart
          I know how to survive a feeling
          But I forgot that I knew it
          A manic forgetter froze my meats
          I kept asking for help when I didn't need it
          My demons stared out from the ice
          When they finally thawed they'd been dead all along
          And now I am the walking thawed
          You survive yourself if you wait long enough
          And vomit your guts down your defrosted breast
          And bathe in your mess and say baby it's fine

                            Melissa Broder`
      },
    ]
  },
  {
    id: 4,
    organ: "arm",
    title: "Embrace Weaponization",
    image: `${imgUrlRoot + 'Arm.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Arm_tn.jpg'}`,
    quotation:
      <p>
       This world is ruled<br/>
       By demented old men<br/>
       Shaking hands all day long<br/>
       But what they do is breeding hate<br/>
       We've got to stop them<br/>
       Before it's too late<br/>
       Stop the arms race<br/>
       Not the human race<br/><br/>

          Balthasar Gerards Kommando
      </p>,
    top: "34%",
    left: "62%",
    tabs: [
      {name: "The Body Politic", content: `'Sidney, Trenchard, and a host of other radical Whig essayists shared with Harrington the idea that arms were "the only true badges of liberty." In "a popular or mixed Government," wrote Sidney, "the body of the People is the publick defence, and every man is arm'd and disciplin'd." No nation was secure except by relying on the military strength of its own people. Nevertheless, freedom did not depend on the armed individual. Arms guaranteed liberty only through the organization and discipline provided by the militia.' - Lawrence Delbert Cress`},
      {name: "Out of Body Experience", content: `'Excluding those taken in mirrors - a distinct subset of this universe - selfies are nearly always taken from within an arm’s length of the subject. For this reason the cropping and composition of selfies are very different from those of all preceding self-portraiture. There is the near constant visual presence of one of the photographer’s arms, typically the one holding the camera. Bad camera angles predominate, as the subject is nearly always off-center. The wide-angle lens on most cell phone cameras exaggerates the depth of noses and chins, and the arm holding the camera often looks huge.' - Jerry Saltz`},
      {name: "Corpus Delicti", content:`'All this Charmian blamed upon Mrs Pettigrew, forgetting for the moment that her past tormentor had been Lisa; so bitter was the particular memory and so vicious was her new tormentor. For Mrs Pettigrew had wrenched Charmian's arm while getting her dress off, had possibly bruised the arm with her hard impatient grasp. "What you need," Mrs Pettigrew had said, "is a nurse. I am not a nurse." Charmian felt indignant at the suggestion that she needed a nurse.' - Muriel Spark`},
      {name: "Foreign Body", content: `'Anabel, que había estado escuchando la conversación, abrió los ojos y movió la cabeza hacia ambos lados. Quiso levantar el brazo que tenía en el suero, pero Tania se lo impidió. -No muevas ese brazo, mi niña, que tienes puesto el suero -dijo Tania mientras le acomodaba el brazo al costado del cuerpo. Nuria miró a Anabel con desconfianza.' - Omar Magrini`},
      {name: "The Body Text", content: `
        This arm. It lies on the table like an old musical instrument or a
          dishmop, smoking a cigarette this time. I'm glad it is here but
          the question is, what shall I use it for?
        It will express my will, or my whim, as words will; it's free.
        I say something or my arm does something.

                            Michael Benedikt`
      },
    ]
  },
  {
    id: 5,
    organ: "eye",
    title: "Foresighted Blindness to a Panopticism",
    image: `${imgUrlRoot + 'Eye.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Eye_tn.jpg'}`,
    quotation: `'The eye responds only to changes, to borders between light and dark. To create meaning from what it sees, indeed, for there to be vision at all, the eye needs borders, differences that distinguish one object from another. Fresh from the lab, I learned the same lesson in an introductory course on literary theory. When defining something, we typically compare it to something similar and then, like the eye, focus on the way it differs from the concepts most closely related to it. Like our visual system, we create meaning only through the differences we perceive and the boundaries we believe are present.' - Laura Otis`,
    top: "4%",
    left: "48.3%",
    tabs: [
      {name: "The Body Politic", content: `'The world is thereby left with Foucault’s conceptualisation of the panopticon as the eye-ofpower/the eye-of-authority/the new-power-of-universalsurveillance which inhabits each and every institutional setting. But by Foucault’s account, the power that operated each discipline’s gaze is not merely metaphysical: it is an everyday of-the-world matter of individual and collective human practice.' - Keith Hollinshead`},
      {name: "Out of Body Experience", content: `'What goes on in the "mind's eye?" Why can certain kinds of stimuli be more readily recalled? Why do certain mnemonics work? Why do certain classes of recall and performance tasks interfere or result in systematic confusions? The why in each of these questions could not, be approached until the image metaphor is replaced by a fine detail information-processing model whose relation to the experience of imagery, by the way, is really quite a secondary matter. It is, in fact, significant that in this more formal model the experience of imaging has no causal role. It remains, at most, a source of ideas suggesting what processes might be required in the model.' - Zenon W Pylyshyn`},
      {name: "Corpus Delicti", content:`'It had a profile like an eagle and its wide round eye was a camera lens. The lens was aimed at the naked girl in the chair. There was a blackened flash bulb clipped to the side of the totem pole. Geiger was wearing Chinese slippers with thick felt soles, and his legs were in black satin pyjamas and the upper part of him wore a Chinese embroidered coat, the front of which was mostly blood. His glass eye shone brightly up at me and was by far the most lifelike thing about him. At a glance none of the three shots I heard had missed. He was very dead.' - Raymond Chandler`},
      {name: "Foreign Body", content: `'Suplico que vuestra merced sea servido de mostrarnos algún retrato de esa señora, aunque sea tamaño como un grano de trigo; que por hilo se sacará el ovillo, y quedaremos con esto satisfechos y seguros, y vuestra merced quedará contento y pagado; y aun creo que estamos ya tan de tu parte que, aunque su retrato nos muestre que es tuerta de un ojo y que del otro mana bermellón y piedra azufre, con todo eso, por complacer a vuestra merced, diremos en su favor todo lo que quisiere.' - Miguel de Cervantes Saavedra`},
      {name: "The Body Text", content: `
          It was a long day:
          Deborah waiting for the blood vessels
          painted
          on her iris to dry.
          Her mother said that, holding Deborah
          when she was born,
          “First I inspected her, from toes to navel,
          then stopped at her head ...”
          We wondered why
          the inspection hadn’t gone the other way.
          “Looking into her eye
          was like looking into a volcano."

                            Carolyn Kizer`
      },
    ]
  },
  {
    id: 6,
    organ: "foot",
    title: "Tread Lightly, Wanderer",
    image: `${imgUrlRoot + 'Foot.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Foot_tn.jpg'}`,
    quotation: `'The writer of the Derveni Papyrus cites some phrases from Heraclitus’s work; in particular, he cites the following: "the Sun according to nature has the width of a human foot, not over-stepping his measures; if he does, the Erinyes, the minions of Justice, will find him." It is a pity that the papyrus was significantly destroyed; thus it is difficult to read it and be sure about the meaning of the saved words. Of those lines that were saved, it reads: "sacrifice… of justice"; or, in another rendering: "it will be an overstepping of justice”. In either case we could raise the following question: what would happen, if the Sun overstepped its measures?' - Theodoros Christidis`,
    top: "82%",
    left: "49%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'"I was unhappy because I had no shoes until I met a man with no feet." The Watchmen exchanged glances. "What?" said Vimes, very carefully. "People like it if I occasionally come up with a little aphorism or inspiring Thought For The Day," said the imp. "So how did you meet this man with no feet?" said Vimes. "I didn't actually meet him," said the imp. "It was a general metaphorical statement." " Well, that's it, then," said Vimes. "If you'd met him you could have asked him if he had any boots he didn't have any use for."' - Terry Pratchett`},
      {name: "Corpus Delicti", content:`'Hold on to the real tragedy at the heart of the farce, I thought briefly, and walked over to the water trough to look at the foot that lay behind it. There were horse-feed nuts scattered everywhere around. Without expecting much emotion, I bent and picked the foot up. I hadn't seen the other severed feet. I'd actually thought some of the reported reactions excessive. But the reality of that poor, unexpected, curiously lonely lump of bone, gristle and torn ends of blood vessels, that wasted miracle of anatomical elegance, moved me close to the fury and grief of the owners.' - Dick Francis`},
      {name: "Foreign Body", content: `'Eran casi siempre cuerpos esqueléticos, amarillos, como momias. Al dar en la piedra hacían un ruido desagradable, extraño, como de algo sin elasticidad que se derrama; luego, los mozos iban cogiendo los muertos, uno a uno, por los pies y arrastrándolos por el suelo, y al pasar unas escaleras que había para bajar a un patio donde estaba el depósito de la sala, las cabezas iban dando lúgubremente en los escalones de piedra.' - Pío Baroja`},
      {name: "The Body Text", content: `
          It is appropriate that I sing
          The song of the feet

          The weight of the body
          And what the body chooses to bear
          Fall on me

          I trampled the American wilderness
          Forged frontier trails
          Outran the mob in Tulsa
          Got caught in Philadelphia

          And am still unreparated

          I wiggle my toes
          In the sands of time
          Trusting the touch that controls my motion
          Basking in the warmth of the embrace
          Day’s end offers with warm salty water

                            Nikki Giovanni`
      },
    ]
  },
  {
    id: 7,
    organ: "heart",
    title: "Core Zone Fluid Mechanics",
    image: `${imgUrlRoot + 'Heart.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Heart_tn.jpg'}`,
    quotation: `'Almost immediately, he dreamt of a beating heart. He dreamt it as active, warm, secret, the size of a closed fist, of garnet color in the penumbra of a human body as yet without face or sex; with minute love he dreamt it, for fourteen lucid nights. Each night he perceived it with greater clarity. He did not touch it, but limited himself to witnessing it, observing it, perhaps correcting it with his eyes. He perceived it, lived it, from many distances and many angles. On the fourteenth night he touched the pulmonary artery with his finger, and then the whole heart, inside and out. The examination satisfied him. Deliberately, he did not dream for a night; then he took the heart again, invoked the name of a planet and set about to envision another of the principal organs.' - Jorge Luis Borges`,
    top: "24%",
    left: "42.2%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 8,
    organ: "leg",
    title: "The Stance of Legend",
    image: `${imgUrlRoot + 'Leg.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Leg_tn.jpg'}`,
    quotation: `'A miracle seemed to have happened. The reality of my leg, and the power to stand and walk again, had been given to me, had descended upon me like grace. Now, re-united with my leg - with a part of myself that been excommunicated, in Limbo - I found myself full of tender regard for it, and stroked the cast. I felt an immense feeling of Welcome for the lost leg, now returned. The leg had come home, to its home, to me. In action the body had been broken, and only now, with the return of bodily action as a whole, did the body itself again feel like a whole.' - Oliver Sacks`,
    top: "63%",
    left: "42%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 9,
    organ: "nose",
    title: "Old Factory of Sense",
    image: `${imgUrlRoot + 'Nose.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Nose_tn.jpg'}`,
    quotation: `'The conundrum of the human nose is as much cultural as zoological or biological. The organisation of modern Western culture is marked by the search for, and maintenance of, olfactory neutrality, and Edward Hall suggests the "extensive use of deodorants and suppression of odour in public places results in an olfactory blandness and sameness that would be difficult to duplicate anywhere else in the world". But, as Pasquale Gagliardi contends, organisations educate and shape our sensorium and perceptual faculties and in doing so develop in us a sense of how to behave. This is what Mary Douglas means when she suggests that the social body constrains how we perceive the physical body. The apparent cultural decline in the importance of smell expresses not just a shift in sensory priorities, but also a shift in the cultural and conceptual context of behaviour.' - J Martin Corbett`,
    top: "2.5%",
    left: "43.4%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 10,
    organ: "rib",
    title: "Like a Cage for Laughter",
    image: `${imgUrlRoot + 'Rib.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Rib_tn.jpg'}`,
    quotation: `'In many communities, such as mine, there are ongoing, active attempts to exclude evolution from the public school curriculum. Lecturing on evolution is an interesting challenge under these circumstances.
    But I always have the last laugh. I share it with my classes after they have counted ribs for themselves and know for themselves the correct answer. You see, I really do have one fewer pair of ribs than my mother.
    Don’t get me wrong: I’m perfectly normal. I have 12 pairs of ribs, just like almost every other human being, male or female. So, as far as we know, do my father and brother. My mother is the unusual one. She has 13 pairs of ribs.' - Robert S Root-Bernstein`,
    top: "21%",
    left: "49%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 11,
    organ: "spine",
    title: "Articulate and Fearless",
    image: `${imgUrlRoot + 'Spine.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Spine_tn.jpg'}`,
    quotation: `'The forward bend task, a standard procedure in clinical examination of the spine, is a composite motion that requires coordination of the hips, lumbar spine and thoracic spine. The relative contribution of these joints in this movement task is often used to help make clinical judgments regarding potential physiologic mechanisms underlying the patients’ low back pain (e.g., shortened muscles). However, our data suggest that performance on this task is influenced by a combination of pain and fear, each with independent effects on spine and hip joint motions. Thus clinicians should consider the potential role of psychological mechanisms (e.g., fear of pain and harm) when interpreting patient performance on this task.' - James S Thomas and Christopher R France`,
    top: "33%",
    left: "44%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 12,
    organ: "throat",
    title: "So Art to Swallow",
    image: `${imgUrlRoot + 'Throat.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Throat_tn.jpg'}`,
    quotation: `'In normal speech and song, most of the energy is concentrated at the fundamental frequency, and harmonics are perceived as elements of timbre—the same quality that distinguishes the rich sound of a violin from the purer tones of a flute—rather than as different pitches. In throat-singing, however, a single harmonic gains such strength that it is heard as a distinct, whistlelike pitch. Such harmonics often sound disembodied. Are they resonating in the vocal tract of the singer, in the surrounding physical space or merely in the mind of the listener?' - Theodore C Levin and Michael E Edgerton`,
    top: "13%",
    left: "43%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 13,
    organ: "back",
    title: "Where Monkies Write Blurbs",
    image: `${imgUrlRoot + 'Back.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Back_tn.jpg'}`,
    quotation: `'To a man-of-war's-man's experienced eye the marks of a naval scourging with the "cat" are through life discernible. And with these marks on his back, this image of his Creator must rise at the Last Day. Yet so untouchable is true dignity, that there are cases wherein to be flogged at the gangway is no dishonor; though, to abase and hurl down the last pride of some sailor who has piqued him, be sometimes the secret motive, with some mallicious officer, in procuring him to be condemned to the lash. But what torments must that seaman undergo who, while his back bleeds at the gangway, bleeds agonized drops of shame from his soul!' - Herman Melville`,
    top: "29%",
    left: "52%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 14,
    organ: "breast",
    title: "Going Bust from Hereon In",
    image: `${imgUrlRoot + 'Breast.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Breast_tn.jpg'}`,
    quotation: `'After the rape, Lucrece "wakes her heart by beating on her breast" and the poem puns on "chest" as body part and as box when she bid her leave to "find/Somepurer chest". Bodily pollution and hidden cruelty become entwined in images of corruption. Lucrece asks why should "tyrant folly lurk in gentles breasts" and, enraged, directs her anger onto herself as "patience is quite beaten from her breast". To clear herself from the stain of pollution she repeats Tarquin's invasive action and assails "her harmless breast" with a knife, following the model of the Philomel, who presses her nightingale's breast against a thorn.' - Alison Findlay`,
    top: "22%",
    left: "33.4%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 15,
    organ: "groin",
    title: "In the Bathroom, In the Bedroom",
    image: `${imgUrlRoot + 'Groin.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Groin_tn.jpg'}`,
    quotation: `'In Plato's account, it was when the psyche had passed out of a bodily region that was "low" and "physical" in another sense, the groin, the area of sexual lust and generation, that Socrates uncovered his face to make his last ironic remark, that he owed a cock to Asclepius, since he had now recovered from the sickness of being alive.' - Christopher Gill`,
    top: "47.5%",
    left: "41.5%",    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 16,
    organ: "mouth",
    title: "Hot Food In, Hot Air Out",
    image: `${imgUrlRoot + 'Mouth.jpg'}`,
    thumbnail: `${imgUrlRoot + 'Mouth_tn.jpg'}`,
    quotation: `'A fool does not delight in understanding,
        but only in airing his opinions.
        The words of a man’s mouth are deep waters;
        the fountain of wisdom is a bubbling brook.
        A fool’s lips bring strife,
        and his mouth invites a beating.
        A fool’s mouth is his ruin,
        and his lips are a snare to his soul.
        A gossip’s words are like choice morsels,
        and they sink into the inmost being.
        He who answers a matter before he hears it —
        this is folly and disgrace to him.
        The first to state his case seems right
        until another comes forward and examines him.
        Casting the lot ends quarrels
        and separates strong opponents.
        From the fruit of his mouth a man’s belly is filled;
        with the harvest from his lips he is satisfied.
        Life and death are in the power of the tongue,
        and those who love it will eat its fruit.' - Proverbs 18`,
    top: "5.3%",
    left: "42.9%",
    tabs: [
      {name: "The Body Politic", content: `'The act of neurofeedback gives users an idea, an image, about their selves that is rather computerized. They describe the neurofeedback process as a "defragmentation of your computer", "cubes put in the right order", "a computer wiring me", "the program that reacts on the waves in your head", "my system is unstable", "my system resets itself over and over again". One could say that in the search for a better self the brain becomes an important partner for the user. This brain thinks for, speaks with, works on, and interferes with the user. It can split into neurotransmitters, brainwaves, neurons, substances and alpha-things. It interacts with the user’s world, life, psychology and ideas, but also the other way around. It can withhold the user from her or his real self, or it can change or cure this real self.
      New technologies of the self give rise to new selves, stated Foucault, and in the case of the brain devices this is clearly the case. The act of manipulating the brain with a device makes people very aware of their biological constitution. First they learn that their problems are brain problems, then they see these problems visualized in their brain map, and next they interfere directly with their brains to fix these problems. In this process the brain is clearly separated from the self. But more than that, users of brain devices need more and more entities to explain their selves and their healing process.' - Jonna Brennkinmeijer`},
      {name: "Out of Body Experience", content: `'Thought is not arborescent, and the brain is not a rooted or ramified matter. What are wrongly called "dendrites" do not assure the connection of neurons in a continuous fabric. The discontinuity between cells, the role of the axons, the functioning of the synapses, the existence of synaptic microfissures, the leap each message makes across these fissures, make the brain a multiplicity immersed in its plane of consistency or neuroglia, a whole uncertain, probabilistic system ("the uncertain nervous system"). Many people have a tree growing in their heads, but the brain itself is much more a grass than a tree. "The axon and the dendrite twist around each other like bindweed around brambles, with synapses at each of the thorns."' - Gilles Deleuze and Félix Guattari`},
      {name: "Corpus Delicti", content:`'All his life Walt Whitman believed in the science of phrenology – you know, reading the bumps on the skull. Whitman was interested in brains and skulls – thought they could tell you everything about a man’s character. Anyway, when Whitman lay dying over there in New Jersey about fifty or sixty years ago, he agreed to let them perform an autopsy on him after he was dead. A lot of people thought he was a genius, you see, and they wanted to take a look at his brain to find out if there was anything special about it. So, the day after he died, a doctor removed Whitman's brain - cut it right out of his head - and had it sent to the American Anthropometric Society to be measured and weighed. But this is where the story gets interesting. The brain arrives at the laboratory, and just as they're about to get to work on it, one of the assistants drops it on the floor. A brain isn't very tough you know. It splattered all over the place, and that was that. The brain of America’s greatest poet got swept up and thrown out with the garbage. It’s sad to think of poor Walt lying in his grave, though. All alone and without any brains.' - Paul Auster`},
      {name: "Foreign Body", content: `'Es importante tener en cuenta que cierta sobreexigencia puede derivar, sobre todo cuando el cerebro está en desarrollo, en un trastorno compulsivo. La persona que  transita largas sesiones conectada en detrimento de otras actividades, con necesidad imperiosa de conectarse y gran malestar si no puede, con dificultades para autolimitarse y con efectos nocivos en su estado de ánimo (usualmente depresión y ansiedad), tiene los síntomas más frecuentes de este trastorno adictivo.
      Esto no significa que los usos normales de estas tecnologías lleven a esta condición, sino que, por lo general, quienes la padecen son personas que presentan una neurobiología particular que los hace más vulnerables a caer en estas conductas compulsivas.
      Borges (otra vez Borges) describió en uno de sus relatos a la de Babel como una biblioteca total e interminable, con una naturaleza informe y caótica, pero que a través de ella el universo estaba justificado, que con ella el universo había usurpado bruscamente las dimensiones ilimitadas de la esperanza. Muchos leyeron esto como una alegoría anticipatoria de Internet. Parece ser que también, cuando se trata de nuevas tecnologías y neurociencias, se debe invocar al maestro.' - Facundo Manes and Mateo Niro`},
      {name: "The Body Text", content: `
        The brain is wider than the sky,<br>
          For, put them side by side,
        The one the other will include
          With ease, and you beside.

        The brain is deeper than the sea,
          For, hold them, blue to blue,
        The one the other will absorb,
          As sponges, buckets do.

        The brain is just the weight of God,
          For, lift them, pound for pound,
        And they will differ, if they do,
          As syllable from sound.

                            Emily Dickinson`
      },
    ]
  },
  {
    id: 17,
    organ: "otherHand",
    title: "De L'Autre....",
    image: `${imgUrlRoot + 'OtherHand.jpg'}`,
    thumbnail: `${imgUrlRoot + 'OtherHand_tn.jpg'}`,
    top: "43.8%",
    left: "22.3%",
    tabs: []
  },
  {
    id: 18,
    organ: "poem",
    title: "Oh my daze Leticia, what you found fam??",
    image: `${imgUrlRoot + 'FullBody.jpg'}`,
    thumbnail: `${imgUrlRoot + 'FullBody_tn.jpg'}`,
    top: "98%",
    left: "0%",
    tabs: []
  }
]

export default initialData
