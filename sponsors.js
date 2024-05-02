/* sponsors.js */

/* 19 Mar 2022  GRCon22 version */
/* 20 Mar 2022  don't show "Our Sponsors" if there aren't any */
/* 24 Mar 2022  major restructuring to handle GRCon21 and GRCon22 */
/* 07 Apr 2022  changed sponsors page */
/* 06 May 2022  Marc modified the style of the table in the footer */
/* 24 Dec 2022  add icon level size */
/* 27 Dec 2022  add spons23 object */
/* 26 Apr 2023  add HOSTS level */
/* 11 Aug 2023  build Keynotes page */
/* 18 Oct 2023  create spons24 */
/* 21 Jan 2024  change 'Starts' time to 13:00 */

"use strict"

var spons21 = {
  "levels": [
    {"name":"DIAMOND", "lvl_size":240, "entries":[

        /* NI / Ettus Research 10 */
        {"icon":"https://events.gnuradio.org/event/8/images/26-Ettus_NI_Lockup_COLOR_trim.jpg",
        "icon_w":1042,
        "icon_h":472,
        "url":"https://www.ettus.com/",
        "blurb":"Ettus Research, an NI brand, is the world’s leading supplier of software-defined radio platforms, combining ease of use and a robust open-source software community. From wireless research to deployment, we empower you with the SDR tools, systems, and support you need to bring the next generation of wireless technology to life. It’s time. Let’s Engineer Ambitiously™."},

        /* OpenCPI pd 2020 */
        {"icon":"https://events.gnuradio.org/event/8/images/13-opencpi2.png",
        "icon_w":400,
        "icon_h":200,
        "url":"https://www.opencpi.org/",
        "blurb":"Open Component Portability Infrastructure (OpenCPI) is an open source software (OSS) framework for developing and executing component-based applications on heterogeneous embedded systems. As a framework for development and execution, OpenCPI supports defining, implementing, building and testing components, as well as executing applications based on those components in the targeted embedded systems.  By targeting heterogeneous systems, the framework supports development and execution across diverse processing technologies including GPPs (general purpose processors), FPGA (field programmable gate arrays), and GPUs (graphics processing units) assembled into mixed systems."},

        /* Radio Resilience 13 */
        {"icon":"https://events.gnuradio.org/event/8/images/28-RadioResilience_Monogram_wText.png",
        "icon_w":1234,
        "icon_h":500,
        "url":"https://radioresilience.com/",
        "blurb":"Radio Resilience LLC aims to set a new standard of wireless efficiency and durability. The Radio Resilience Competition (RRC) is inspired by and endeavors to build on the legacy of other radio competitions like DARPA’s Spectrum Challenges (though RRC bears no affiliation with DARPA or these events)."}

        ]},

    {"name":"PLATINUM", "lvl_size":120, "entries":[

        /* Analog Devices 14 */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "icon_w":236,
        "icon_h":95,
        "url":"https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."},

        /* Epiq Solutions 5 */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/epiq.png",
        "icon_w":862,
        "icon_h":564,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."},

        /* Rampart Communications */
        {"icon": "https://events.gnuradio.org/event/8/images/25-Comm-Logo-RGB.jpg",
        "icon_w":1600,
        "icon_h":1300,
        "url":"https://rampartcommunications.com/",
        "blurb":"Rampart Communications, Inc. is based in Hanover, Maryland. The founders are physicists, mathematicians, RF engineers, and computer scientists with deep experience building, defending, and attacking wireless communication systems. Our vision is to revolutionize the science of wireless communications and make fundamental advances in digital security by offering the world’s only fundamentally secure means of wireless communication. Rampart's patented technology (implemented in SDR, FPGA, 5G, and Wifi) makes it impossible to intercept, reverse engineer, or exploit a wireless network."}

        ]},

    {"name":"GOLD", "lvl_size":120, "entries":[

        /* Peraton Labs 2 */
        {"icon":"https://events.gnuradio.org/event/8/images/11-Peraton%20Labs%20logo-trimmed.png",
        "icon_w":1236,
        "icon_h":619,
        "url":"https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"},

        /* BlackLynx 4 */
        {"icon": "https://events.gnuradio.org/event/8/images/17-blacklynx_rect.png",
        "icon_w":1007,
        "icon_h":748,
        "url":"https://www.blacklynx.tech/",
        "blurb":"BlackLynx has focused primarily on providing mission critical edge compute for national security customers. Whether processing data on board a platform, the data center, or cloud, BlackLynx delivers the optimal solution. The BlackLynx team consists of highly technical programmers and device experts capable of solving the most difficult mission challenges."},

        /* Xilinx 11 */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/xilinx.png",
        "icon_w":1750,
        "icon_h":355,
        "url":"https://www.xilinx.com/",
        "blurb":"Xilinx is the inventor of the FPGA, programmable SoCs, and now, the Adaptive Compute Acceleration Platform (ACAP). Our highly-flexible programmable silicon, enabled by a suite of advanced software and tools, enables rapid innovation across a wide span of industries and technologies, including high performance Software Defined Radio applications (from Direct RF integration to real-time Signal Processing and Machine Learning)."},

        /* DeepSig 8 */
        {"icon":"https://events.gnuradio.org/event/8/images/20-deepsig_trim.png",
        "icon_w":996,
        "icon_h":735,
        "url":"https://www.deepsig.ai/",
        "blurb":"DeepSig is pioneering the use of deep learning for signal processing and radio systems, developing fundamentally new methodologies for the design and optimization of wireless communications. Our approach uses AI to learn optimized models directly from data rather than manually designing specialized algorithms, creating communications systems that excel in complex environments and are optimized end-to-end. By creating new tools, algorithms, and approaches for signal processing systems, DeepSig is able to achieve unparalleled results in system performance. DeepSig’s engineers have published many of the seminal scientific papers in this area, and are the technical leaders in building real-world practical systems with this technology."},

        /* Microsoft 3 */
        {"icon":"https://events.gnuradio.org/event/8/images/16-Microsoft.png",
        "icon_w":216,
        "icon_h":46,
        "url":"https://www.microsoft.com/",
        "blurb":"Microsoft is driving the intersection of satellite and terrestrial communications with the cloud, making these technologies more accessible, affordable, and widely available through our Azure Orbital product family. Open Source is a cornerstone of Microsoft’s strategy and execution, and Microsoft represents one of the largest OSS contributors on the planet."},

        /* Deepwave Digital 7 */
        {"icon":"https://events.gnuradio.org/event/8/images/18-deepwave_trim.png",
        "icon_w":1051,
        "icon_h":810,
        "url":"https://deepwavedigital.com/",
        "blurb":"Deepwave Digital manufactures the AIR-T. AIR-T is the first software-defined radio (SDR) with an embedded NVIDIA GPU with an FPGA and an RF direct conversion receiver. The AIR-T allows for a fully autonomous SDR by giving the AI engine complete control over the hardware. It integrates three digital processors that provide the functionality needed for any signal processing application: FPGA for strict real-time operations, GPU for highly parallel processing and deep learning, and CPU for control, I/O, DSP, and software applications."},

        /* ARDC 18 */
        {"icon":"https://events.gnuradio.org/event/8/images/29-ARDC_trim.png",
        "icon_w":300,
        "icon_h":144,
        "url":"https://www.ampr.org/",
        "blurb":"Amateur Radio Digital Communications (ARDC) supports and promotes amateur radio, scientific research, education, experimentation, development, open access, and innovation in information and communications technology. Visit our website or email giving@ardc.net <mailto:giving@ardc.net> to learn how we can help make your idea real."}

        ]},

    {"name":"SILVER", "lvl_size":120, "entries":[

        /* Vesperix 12 */
        {"icon":"https://events.gnuradio.org/event/8/images/24-Vesperix-300.png",
        "icon_w":1039,
        "icon_h":362,
        "url":"https://www.vesperix.com/",
        "blurb":"Vesperix Corporation is a small business dedicated to innovative research and development for government and corporate customers. Our research focuses on novel methods for communication, sensing, and navigation."},

/*      Red Wire Technology */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, custom RF circuits, digital signal processing, and FPGA solutions for both turn-key and developer focused applications."}

        ]},

    {"name":"HOSTS", "lvl_size":132, "entries":[
        ]},

    {"name":"PARTNERS", "lvl_size":132, "entries":[

        /* SETI Institute */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/seti_institute.png",
        "icon_w":400,
        "icon_h":243,
        "url":"https://www.seti.org/",
        "blurb":"The SETI Institute’s mission is to explore, understand, and explain the origin and nature of life in the universe and the evolution of intelligence. Founded in 1984, the SETI Institute, a 501(c)(3) nonprofit scientific research institute headquartered in Mountain View, California, employs more than 130 scientists, educators, and administrative staff. Work at the SETI Institute is anchored by three centers: the Carl Sagan Center for the Study of Life in the Universe (research), the Center for Education and the Center for Outreach. The SETI Institute operates the Allen Telescope Array, a 42-element radio array consisting of 6-meter dishes, at the Hat Creek Radio Observatory. The SETI Institute is a key research contractor to NASA and the National Science Foundation, and collaborates with industry partners throughout Silicon Valley and beyond. As of 2020, the Institute manages contracts, grants, and related administration for the GNU Radio project, and engenders collaboration with the community around shared interests in science, engineering, and education."},

        /* BSRC */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/bsrc_bl_logo.png",
        "icon_w":750,
        "icon_h":512,
        "url":"https://seti.berkeley.edu/",
        "blurb":"Berkeley SETI Research Center is a world-leader in the search for extraterrestrial intelligence – the quest for a scientific answer to one of humanity’s oldest questions: Are we alone in the Universe? Housed in the Astronomy Department at the University of California, Berkeley, the team at BSRC leads the science program for the $100-million Breakthrough Listen project. Listen uses cutting-edge instrumentation at the world’s most powerful telescopes, gathering, analyzing, and archiving many petabytes of data per year in the search for artificial signals from beyond Earth. BSRC’s director, Dr. Andrew Siemion, is also Chair of SETI Research at the SETI Institute, and several members of the Berkeley science and engineering team are Visiting Scholars at the SETI Institute. A particular focus of these collaborations is the development of new capabilities on the Allen Telescope Array, including deeper integrations with GNU Radio."}

        ]},

    {"name":"PATRON", "lvl_size":88, "entries":[

        /* SkySafe 6 */
        {"icon":"https://www.gnuradio.org/grcon/grcon19/sponsors/skysafe.svg",
        "icon_w":766,
        "icon_h":766,
        "url":"https://www.skysafe.io/",
        "blurb":"SkySafe provides world-class drone defense and airspace control solutions. Founded in 2015 in San Diego, CA, our team consists of drone experts from MIT, UC San Diego, the Air Force Research Lab, and more. Our industry and intellectual experience includes leaders from the fields of security research, RF engineering, academia, and the military. We are a collection of diverse, capable, and hard working professionals who enjoy attacking the hardest challenges–we also have a lot of fun."},

        /* Duggan Computer Systems 1 */
        {"icon": "https://events.gnuradio.org/event/8/images/6-DCS_logo.png",
        "icon_w":308,
        "icon_h":144,
        "url":"https://github.com/duggabe",
        "blurb":"Duggan Computer Systems is a software consulting firm specializing in email security. Barry Duggan also is involved in the GNU Radio project, and is currently the Documentation Lead."},

        /* Embedded Now 9 */
        {"icon": "https://events.gnuradio.org/event/8/images/19-embedded_now_logo.png",
        "icon_w":412,
        "icon_h":86,
        "url":"https://www.embeddednow.com/",
        "blurb":"Engineering And Design Services To Help You Launch Quickly & with Confidence. Bringing a hardware product to market is one of the toughest things to do. We've brought many products to market and know exactly how hard the struggle can be. A hardware product incorporates electrical engineering, software engineering, user design, industrial engineering, manufacturing, logistics, and some of the most strenuous regulatory hurdles in business. It's tough to have all those competencies on one team. We've created a suite of services to help you navigate the quickest path for getting a great product to market. Whether you are looking for an experienced team to complete a significant portion of the engineering or just need some advice to help with a specific problem, we are here to help."},

        /* Atom Computing 15 */
        {"icon": "https://events.gnuradio.org/event/8/images/22-atom_computing.png",
        "icon_w":574,
        "icon_h":144,
        "url":"https://atom-computing.com",
        "blurb":'Atom Computing is a growing start-up company focused on one mission: Deliver scalable quantum computers that can solve some of the most daunting problems ever attempted by man or machine. Our incredible team of physicists and engineers are building quantum computers out of optically trapped neutral atoms. To find out more visit <a href="https://www.atom-computing.com/company/">atom-computing.com</a>, and follow us on <a href="https://www.linkedin.com/company/atom-computing">LinkedIn</a>, <a href="https://twitter.com/Atom_Computing">Twitter</a>, or <a href="https://www.facebook.com/atomcomputing">Facebook</a>.'},

        /* RL Marlow 16 */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/rlmconsulting.png",
        "icon_w":485,
        "icon_h":203,
        "url":"https://rynmrlw.github.io/rlmarlow.com/",
        "blurb":"RL Marlow Consulting LLC provides FPGA, GNU Radio, and USRP design expertise out of Durham, NC. Founded in 2017, Ryan Marlow has worked directly with Ettus Research, their customers, and other groups working with custom SDR applications. Some examples of work Ryan has done for his clients: wrapped proprietary IP cores into the RFNoC framework to run on a USRP device, developed custom RFNoC blocks that meet customers’ needs,  MIMO USRP applications, integrated SDR frontends with custom GNU Radio blocks, and more. Outside of the USRP space, Ryan has worked on other FPGA projects in the SDR space and beyond, including custom EDA tools for FPGA that has given him a deep understanding of the inner workings of FPGA."},

        /* Sandia National Labs 17 */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/sandiaNL.png",
        "icon_w":688,
        "icon_h":265,
        "url":"http://www.sandia.gov/",
        "blurb":"Sandia National Laboratories is a multimission laboratory operated by National Technology and Engineering Solutions of Sandia LLC, a wholly owned subsidiary of Honeywell International Inc., for the U.S. Department of Energy’s National Nuclear Security Administration. Sandia Labs has major research and development responsibilities in nuclear deterrence, global security, defense, energy technologies and economic competitiveness, with main facilities in Albuquerque, New Mexico, and Livermore, California."}

        ]},

    {"name":"Keynotes", "lvl_size":200, "entries":[
        ]},

    {"name":"Invited Speakers", "lvl_size":200, "entries":[
        ]}

  ]
}

var spons22 = {
  "levels": [
    {"name":"DIAMOND", "lvl_size":240, "entries":[

        /* NI / Ettus Research 10 */
        {"icon":"https://events.gnuradio.org/event/8/images/26-Ettus_NI_Lockup_COLOR_trim.jpg",
        "icon_w":1042,
        "icon_h":472,
        "url":"https://www.ettus.com/",
        "blurb":"Ettus Research, an NI brand, is the world’s leading supplier of software-defined radio platforms, combining ease of use and a robust open-source software community. From wireless research to deployment, we empower you with the SDR tools, systems, and support you need to bring the next generation of wireless technology to life. It’s time. Let’s Engineer Ambitiously™."}

        ]},

    {"name":"PLATINUM", "lvl_size":160, "entries":[

        /* Analog Devices 12 */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "icon_w":236,
        "icon_h":95,
        "url":"https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."},

        /* Epiq Solutions 4 */
        {"icon": "https://events.gnuradio.org/event/18/images/122-epiq.png",
        "icon_w":1354,
        "icon_h":677,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."},

        /* Elbit Systems 17 */
        {"icon": "https://events.gnuradio.org/event/18/images/128-Elbit%20C4i%20and%20Cyber%20logo.jpg",
        "icon_w":1539,
        "icon_h":560,
        "url":"https://elbitsystems.com/",
        "blurb":"Elbit Systems Ltd. is an international high technology company engaged in a wide range of defense, homeland security and commercial programs throughout the world. The Company, which includes Elbit Systems and its subsidiaries, operates in the areas of aerospace, land, and naval systems, command, control, communications, computers, intelligence surveillance and reconnaissance (\"C4ISR\"), unmanned aircraft systems, advanced electro-optics, electro-optic space systems, EW suites, signal intelligence systems, data links and communications systems, radios and cyber-based systems and munitions. The Company also focuses on the upgrading of existing platforms, developing new technologies for defense, homeland security and commercial applications and providing a range of support services, including training and simulation systems.<br><br>For additional information visit: <a href=\"https://elbitsystems.com/\">elbitsystems.com</a>, follow us on: <a href=\"https://twitter.com/ElbitSystemsLtd\">Twitter</a>, <a href=\"https://www.linkedin.com/company/elbitsystems/\">LinkedIn</a>, <a href=\"https://www.facebook.com/elbitsystemsltd/\">Facebook</a> or visit our official <a href=\"https://www.youtube.com/c/elbitsystems\">YouTube</a> Channel."}

        ]},

    {"name":"GOLD", "lvl_size":132, "entries":[

        /* Peraton Labs 1 */
        {"icon":"https://events.gnuradio.org/event/8/images/98-Peraton%20Labs%20logo-trimmed-extra.png",
        "icon_w":1332,
        "icon_h":303,
        "url":"https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"},

        /* Aaronia 2 */
        {"icon":"https://events.gnuradio.org/event/18/images/97-aaronia.png",
        "icon_w":300,
        "icon_h":141,
        "url":"https://aaronia.com/",
        "blurb":"Aaronia is an internationally-renowned high-tech company headquartered in Strickscheid, Germany. Since 2003, we specialize in measuring, tracking and monitoring technology. Our experience, products and patents enable us to provide comprehensive and intelligent drone detection and defense systems with an extremely high range, precision and reliability."},

        /* ARDC 5 */
        {"icon":"https://events.gnuradio.org/event/8/images/29-ARDC_trim.png",
        "icon_w":300,
        "icon_h":144,
        "url":"https://www.ampr.org/",
        "blurb":"Amateur Radio Digital Communications (ARDC) supports and promotes amateur radio, scientific research, education, experimentation, development, open access, and innovation in information and communications technology. Visit our website or email giving@ardc.net <mailto:giving@ardc.net> to learn how we can help make your idea real."},

         /* DeepSig 6 */
        {"icon":"https://events.gnuradio.org/event/8/images/20-deepsig_trim.png",
        "icon_w":996,
        "icon_h":735,
        "url":"https://www.deepsig.ai/",
        "blurb":"DeepSig is pioneering the use of deep learning for signal processing and radio systems, developing fundamentally new methodologies for the design and optimization of wireless communications. Our approach uses AI to learn optimized models directly from data rather than manually designing specialized algorithms, creating communications systems that excel in complex environments and are optimized end-to-end. By creating new tools, algorithms, and approaches for signal processing systems, DeepSig is able to achieve unparalleled results in system performance. DeepSig’s engineers have published many of the seminal scientific papers in this area, and are the technical leaders in building real-world practical systems with this technology."},

        /* Oak Ridge National Labs 8 */
        {"icon":"https://events.gnuradio.org/event/18/images/99-ORNL%20Two-line_color.png",
        "icon_w":2032,
        "icon_h":489,
        "url":"https://www.ornl.gov/",
        "blurb":"ORNL uses artificial intelligence and machine learning to develop solutions in near real time that optimize communications in complex RF environments with no prior training knowledge. We also have teams working on protocol development and RF over fiber that provide a wide range of research opportunities. The Lab has recently installed a ground station for long-range and space-to-ground communication development solutions. Utilizing ORNL’s expertise as the home of the fastest supercomputer in the world, we are creating complex simulations of 5G environments on HPC supercomputers."},

        /* SkySafe 9 */
        {"icon":"https://events.gnuradio.org/event/18/images/124-skysafe.png",
        "icon_w":991,
        "icon_h":634,
        "url":"https://www.skysafe.io/",
        "blurb":"SkySafe provides world-class drone defense and airspace control solutions. Founded in 2015 in San Diego, CA, our team consists of drone experts from MIT, UC San Diego, the Air Force Research Lab, and more. Our industry and intellectual experience includes leaders from the fields of security research, RF engineering, academia, and the military. We are a collection of diverse, capable, and hard working professionals who enjoy attacking the hardest challenges–we also have a lot of fun."},

        /* Rampart Communications 10 */
        {"icon": "https://events.gnuradio.org/event/8/images/25-Comm-Logo-RGB.jpg",
        "icon_w":1600,
        "icon_h":1300,
        "url":"https://rampartcommunications.com/",
        "blurb":"Rampart Communications, Inc. is based in Linthicum Heights, Maryland. The founders are physicists, mathematicians, RF engineers, and computer scientists with deep experience building, defending, and attacking wireless communication systems. Our vision is to revolutionize the science of wireless communications and make fundamental advances in digital security by offering the world’s only fundamentally secure means of wireless communication. Rampart's patented technology (implemented in SDR, FPGA, 5G, and Wifi) makes it impossible to intercept, reverse engineer, or exploit a wireless network."},

        /* Aldec 11 */
        {"icon": "https://events.gnuradio.org/event/18/images/100-Aldec_Crescent_rgb_sm.png",
        "icon_w":833,
        "icon_h":313,
        "url":"http://www.aldec.com/",
        "blurb":"Established in 1984, Aldec is an industry leader in electronic design verification and a leading provider of advanced verification tools and solutions for FPGAs and SoC FPGAs, including mixed-HDL simulation, static linting, CDC analysis, functional coverage, code coverage, FPGA development boards and hardware-assisted verification."},

        /* Microsoft */
        {"icon":"https://events.gnuradio.org/event/8/images/16-Microsoft.png",
        "icon_w":216,
        "icon_h":46,
        "url":"https://azure.microsoft.com/en-us/services/orbital/",
        "blurb":"Microsoft is driving the intersection of satellite and terrestrial communications with the cloud, making these technologies more accessible, affordable, and widely available through our Azure Orbital product family. Open Source is a cornerstone of Microsoft’s strategy and execution, and Microsoft represents one of the largest OSS contributors on the planet."}

       ]},

    {"name":"SILVER", "lvl_size":120, "entries":[

/*      Red Wire Technology 3 */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, available on our website.  RWT offers design services - hardware and RF design, embedded software design, and digital signal processing solutions for both turn-key and developer focused applications."},

/*      BCubed 13 */
        {"icon":"https://events.gnuradio.org/event/18/images/117-BCubed_1.png",
        "icon_w":624,
        "icon_h":226,
        "url":"https://bcubed-corp.com/",
        "blurb":"BCubed Engineering Corporation is an advanced software and engineering company, focused on delivering innovative solutions to address rapidly evolving needs across the DoD, IC, and commercial sector. Our team's expertise in Digital Signals Processing, Machine Learning, and Cloud/On-Premises Computing, combined with cutting-edge GOTS / COTS technologies, allows us to deliver low-cost, reliable solutions that empower end users."},

        /* Deepwave Digital 14 */
        {"icon":"https://events.gnuradio.org/event/8/images/18-deepwave_trim.png",
        "icon_w":1051,
        "icon_h":810,
        "url":"https://deepwavedigital.com/",
        "blurb":"Deepwave is an innovative startup that supplies AI-enabled hardware and software solutions for a wide range of radio frequency (RF) applications at the edge. Our software defined radios (SDRs) tightly couple GPU, CPU, and FPGA processors, and include the software tools expected by a modern software engineer. This includes native support for most AI frameworks, signal processing toolboxes, container environments, and parallel computing tools. By incorporating AI functionality, customers are able to improve performance of many signal processing applications including signal classification and cognitive radio."},

        /* shift5 15 */
        {"icon":"https://events.gnuradio.org/event/18/images/118-shift5-og.jpg",
        "icon_w":300,
        "icon_h":169,
        "url":"https://www.shift5.io/",
        "blurb":"Shift5 is a transportation data company whose customers run smarter, safer, and more efficiently by unlocking their fleet’s data. Fleets generate massive amounts of data every day, and fleet owners deserve technology solutions that turn this data into real business value. Our data-driven solutions integrate directly onto existing platforms, collecting and enriching data from all their electronic components. Shift5 customers employ this data to automate menial tasks, improve reliability and safety, and make smarter business decisions. The US Military and commercial fleet operators alike trust Shift5 with their most critical assets."},

        /* Whitefox 18 */
        {"icon":"https://events.gnuradio.org/event/18/images/129-WF-Logos_Horiz-04.png",
        "icon_w":956,
        "icon_h":396,
        "url":"https://www.whitefoxdefense.com/rf-signal-processing-engineer",
        "blurb":"WhiteFox is internationally recognized as one of the most influential thought-leaders in the counter-drone and airspace management industry. A California-based company whose mission is to protect the nation's airspace against the evolving drone threat.<br><br>WhiteFox is the leading solution provider for detecting, identifying, tracking, and, when necessary, safely mitigating drones in critical airspace. The rapid evolution of drone technology and widespread commercial availability of increasingly capable drones dramatically raise the potential risk to sensitive installations and infrastructure. WhiteFox provides a comprehensive, standardized, intuitive suite of products for drone identification and management that enables seamless, cross-agency coordination and response."}

        ]},

    {"name":"HOSTS", "lvl_size":132, "entries":[

        ]},

    {"name":"PARTNERS", "lvl_size":132, "entries":[

        /* SETI Institute */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/seti_institute.png",
        "icon_w":400,
        "icon_h":243,
        "url":"https://www.seti.org/",
        "blurb":"The SETI Institute’s mission is to explore, understand, and explain the origin and nature of life in the universe and the evolution of intelligence. Founded in 1984, the SETI Institute, a 501(c)(3) nonprofit scientific research institute headquartered in Mountain View, California, employs more than 130 scientists, educators, and administrative staff. Work at the SETI Institute is anchored by three centers: the Carl Sagan Center for the Study of Life in the Universe (research), the Center for Education and the Center for Outreach. The SETI Institute operates the Allen Telescope Array, a 42-element radio array consisting of 6-meter dishes, at the Hat Creek Radio Observatory. The SETI Institute is a key research contractor to NASA and the National Science Foundation, and collaborates with industry partners throughout Silicon Valley and beyond. As of 2020, the Institute manages contracts, grants, and related administration for the GNU Radio project, and engenders collaboration with the community around shared interests in science, engineering, and education."},

        /* BSRC */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/bsrc_bl_logo.png",
        "icon_w":750,
        "icon_h":512,
        "url":"https://seti.berkeley.edu/",
        "blurb":"Berkeley SETI Research Center is a world-leader in the search for extraterrestrial intelligence – the quest for a scientific answer to one of humanity’s oldest questions: Are we alone in the Universe? Housed in the Astronomy Department at the University of California, Berkeley, the team at BSRC leads the science program for the $100-million Breakthrough Listen project. Listen uses cutting-edge instrumentation at the world’s most powerful telescopes, gathering, analyzing, and archiving many petabytes of data per year in the search for artificial signals from beyond Earth. BSRC’s director, Dr. Andrew Siemion, is also Chair of SETI Research at the SETI Institute, and several members of the Berkeley science and engineering team are Visiting Scholars at the SETI Institute. A particular focus of these collaborations is the development of new capabilities on the Allen Telescope Array, including deeper integrations with GNU Radio."}

        ]},

    {"name":"PATRON", "lvl_size":88, "entries":[

/*      Cambridge Radio Instruments */
        {"icon":"https://events.gnuradio.org/event/18/images/113-CRI_logo.png",
        "icon_w":2459,
        "icon_h":354,
        "url":"https://www.cr-instruments.co.uk/",
        "blurb":"Cambridge Radio Instruments offers a wide range of consultancy services including the design and fabrication of RF and microwave technologies. Our services include antenna design, RF device modeling and PCB layout as well as digital design services for real-time signal processing systems based around FPGA, GPU, and CPU processing platforms.<br><br>We are involved in developing ultra wideband transceivers based on Xilinx System-on-Chip architectures for use in a variety of applications including software-defined radio. Our latest offering, codenamed &quot;Sparrow&quot; is a tunable dual-input baseband receiver with up to 400MHz bandwidth employing onboard White Rabbit technology for sub-nanosecond synchronisation of data packets. We look forward to taking on new projects, working from conceptual design all the way to fabrication and testing. Contact email: nimarazavi@gmail.com"},

        /* Verus Technology */
        {"icon": "https://events.gnuradio.org/event/18/images/120-verus.png",
        "icon_w":1730,
        "icon_h":490,
        "url":"https://www.verustechnologygroup.com/",
        "blurb":"Verus Technology specializes in Counter UAS Systems for Drone Detection. Human life, strategic interests, and commercial endeavors are under increasing threat due to the intrinsic versatility and stealth of a drone. Counter drone and UAS technology successfully minimizes safety risks in the airspace."},

        /* RL Marlow */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/rlmconsulting.png",
        "icon_w":485,
        "icon_h":203,
        "url":"https://rynmrlw.github.io/rlmarlow.com/",
        "blurb":"RL Marlow Consulting LLC provides FPGA and USRP design services and expertise. Founded in 2017 by Ryan Marlow and now based out of his home office in Durham, NC. Ryan has worked directly with Ettus Research/NI and their customers. Some examples of this work: wrapped proprietary ip cores into the RFNoC framework to run on a USRP device, developed custom RFNoC blocks that meet customers' needs, devised multi-USRP schemes to control multiple devices for MIMO tasks, and porting a custom SDR platform into the UHD environment to send/receive commands and data samples to/from GNU Radio. Ryan has directly contributed to the UHD github codebase. Some applications of his DSP work include: MIMO radar system, beamforming algorithm development and implementation, and signal detection using high speed FFT and frequency sweeping. In addition to DSP related work, Ryan has worked in hardware-level cybersecurity and custom EDA tools that have given him a deeper understanding of low level FPGA architecture."},

        /* AirIn Technologies */
        {"icon": "https://events.gnuradio.org/event/18/images/123-airin.jpg",
        "icon_w":914,
        "icon_h":300,
        "url":"https://www.airintech.com/",
        "blurb":"AirIn Technologies provides advisory and consulting services throughout the entire satellite payload life cycle. We facilitate initial R&D, discuss and match requirements, and enable testing. We also complete anomaly resolution and work with operations. Our areas of expertise include digital communications, advanced DSP, phased array and array processing, geo-location, RF receiver design, antenna modeling and design, electromagnetic propagation, computational electromagnetics, and machine learning."},

        /* USDR */
        {"icon": "https://events.gnuradio.org/event/18/images/130-GRCON22-VJ9JN-1-wsdr_lightblue.png",
        "icon_w":6894,
        "icon_h":1960,
        "url":"https://usdr.pro/",
        "blurb":"USDR is a project that aims to eliminate the drawbacks of using SDR by web approach. No special software, drivers, version incompatibilities, configuration files, just a web browser that makes everything work easy and time-wise. All signal processing can be done directly in the browser tab, thus enabling global collaboration in decoding and signal processing worldwide."}

        ]},

    {"name":"Keynotes", "lvl_size":200, "entries":[
        ]},

    {"name":"Invited Speakers", "lvl_size":200, "entries":[
        ]}

  ]
}

var spons23 = {
  "levels": [
    {"name":"DIAMOND", "lvl_size":180, "entries":[

        /* NI / Ettus Research 1006 */
        {"icon":"https://events.gnuradio.org/event/8/images/26-Ettus_NI_Lockup_COLOR_trim.jpg",
        "icon_w":1042,
        "icon_h":472,
        "url":"https://www.ettus.com/",
        "blurb":"Ettus Research, an NI brand, is the world’s leading supplier of software-defined radio platforms, combining ease of use and a robust open-source software community. From wireless research to deployment, we empower you with the SDR tools, systems, and support you need to bring the next generation of wireless technology to life. It’s time. Let’s Engineer Ambitiously™."}

        ]},

    {"name":"PLATINUM", "lvl_size":120, "entries":[

        /* Analog Devices 1010 */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/Analog_Devices_Logo.svg",
        "icon_w":236,
        "icon_h":95,
        "url":"https://www.analog.com/",
        "blurb":"Analog Devices Analog Devices (Nasdaq: ADI) is the leading global high-performance analog technology company dedicated to solving the toughest engineering challenges. We enable our customers to interpret the world around us by intelligently bridging the physical and digital with unmatched technologies that sense, measure, power, connect and interpret."}

        ]},

    {"name":"GOLD", "lvl_size":100, "entries":[

        /* ARDC 1002 */
        {"icon":"https://events.gnuradio.org/event/8/images/29-ARDC_trim.png",
        "icon_w":300,
        "icon_h":144,
        "url":"https://www.ampr.org/",
        "blurb":"Amateur Radio Digital Communications (ARDC) supports and promotes amateur radio, scientific research, education, experimentation, development, open access, and innovation in information and communications technology. Visit our website or email giving@ardc.net <mailto:giving@ardc.net> to learn how we can help make your idea real."},

        /* Epiq Solutions 1003 */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/epiq.png",
        "icon_w":862,
        "icon_h":564,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."},

         /* DeepSig 1004 */
        {"icon":"https://events.gnuradio.org/event/8/images/20-deepsig_trim.png",
        "icon_w":996,
        "icon_h":735,
        "url":"https://www.deepsig.ai/",
        "blurb":"DeepSig is pioneering the use of deep learning for signal processing and radio systems, developing fundamentally new methodologies for the design and optimization of wireless communications. Our approach uses AI to learn optimized models directly from data rather than manually designing specialized algorithms, creating communications systems that excel in complex environments and are optimized end-to-end. By creating new tools, algorithms, and approaches for signal processing systems, DeepSig is able to achieve unparalleled results in system performance. DeepSig’s engineers have published many of the seminal scientific papers in this area, and are the technical leaders in building real-world practical systems with this technology."},

        /* Peraton Labs 1008 */
        {"icon":"https://events.gnuradio.org/event/8/images/98-Peraton%20Labs%20logo-trimmed-extra.png",
        "icon_w":1332,
        "icon_h":303,
        "url":"https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"},

        /* Rampart Communications 1009 */
        {"icon": "https://events.gnuradio.org/event/8/images/25-Comm-Logo-RGB.jpg",
        "icon_w":1600,
        "icon_h":1300,
        "url":"https://rampartcommunications.com/",
        "blurb":"Rampart Communications, Inc. is based in Linthicum Heights, Maryland. The founders are physicists, mathematicians, RF engineers, and computer scientists with deep experience building, defending, and attacking wireless communication systems. Our vision is to revolutionize the science of wireless communications and make fundamental advances in digital security by offering the world’s only fundamentally secure means of wireless communication. Rampart's patented technology (implemented in SDR, FPGA, 5G, and Wifi) makes it impossible to intercept, reverse engineer, or exploit a wireless network."},

        /* Vesperix 1012 */
        {"icon":"https://events.gnuradio.org/event/8/images/24-Vesperix-300.png",
        "icon_w":1039,
        "icon_h":362,
        "url":"http://vxsdr.vesperix.io/",
        "blurb":"Vesperix Corporation is a small business performing research and development for government and corporate customers. Our VXSDR software defined radios cover the 5-20 GHz frequency band."}

        ]},

    {"name":"SILVER", "lvl_size":90, "entries":[

        /* Red Wire Technology 1001 */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, available on our website.  RWT offers design services - hardware and RF design, embedded software design, and digital signal processing solutions for both turn-key and developer focused applications."},

        /* Johns Hopkins Applied Physics Lab 1005 */
        {"icon":"https://events.gnuradio.org/event/21/images/135-apl_small_horiz_blue_trim.png",
        "icon_w":1234,
        "icon_h":295,
        "url":"https://www.jhuapl.edu/",
        "blurb":"The Johns Hopkins Applied Physics Laboratory is a not-for-profit university affiliated research center (UARC) that solves complex research, engineering, and analytical problems that present critical challenges to our nation. Our scientists, engineers, and analysts serve as trusted advisors and technical experts to the government, ensuring the reliability of complex technologies that safeguard our nation’s security and advance the frontiers of space. We also maintain independent research and development programs that pioneer and explore emerging technologies and concepts to address future national priorities."},

        /* ANDRO no invoice (credit card) */
        {"icon":"https://events.gnuradio.org/event/21/images/142-ANDRO_Logo.png",
        "icon_w":2410,
        "icon_h":609,
        "url":"https://www.androcs.com/",
        "blurb":"ANDRO Computational Solutions, LLC utilizes software defined radios in several key areas: software-based waveform development, AI/ML wireless applications, dynamic spectrum access (DSA), and 5G spectrum planning, managing and coordination. ANDRO’s <a href='https://www.androcs.com/wp/tech/waveform-development/'>software-based waveform development</a> leverages customized libraries, efficient multi-threading, and AVX2 optimization to achieve high symbol-rate waveform implementations in GPP.  ANDRO’s modular waveform library enables rapid development of new waveforms or modification to legacy waveforms."},

        /* RFNM 1013 */
        {"icon":"https://events.gnuradio.org/event/21/images/145-RFNM.jpg",
        "icon_w":400,
        "icon_h":400,
        "url":"https://rfnm.io/",
        "blurb":"RFNM is a new concept for a modular innovation platform that uses brand new silicon to make previously inaccessible designs affordable to everyone."},

        /* BCubed 1014 */
        {"icon":"https://events.gnuradio.org/event/18/images/117-BCubed_1.png",
        "icon_w":624,
        "icon_h":226,
        "url":"https://bcubed-corp.com/",
        "blurb":"BCubed Engineering Corporation is an advanced software and engineering company, focused on delivering innovative solutions to address rapidly evolving needs across the DoD, IC, and commercial sector. Our team's expertise in Digital Signals Processing, Machine Learning, and Cloud/On-Premises Computing, combined with cutting-edge GOTS / COTS technologies, allows us to deliver low-cost, reliable solutions that empower end users."},

        /* AnySignal 1017 */
        {"icon":"https://events.gnuradio.org/event/21/images/148-AnySignal_logo_blue.png",
        "icon_w":1240,
        "icon_h":1240,
        "url":"https://www.anysignal.com/",
        "blurb":"AnySignal develops the next-generation of communications and RF intelligence solutions for aerospace and military customers, with current applications including spacecraft, advanced aircraft, military vehicles, and manpack radios. The team is founded by SpaceX veterans and those with deep ties into the GNURadio community. If you're interested in joining us for our mission, visit us at <a href='https://www.anysignal.com/'>AnySignal.com</a>"}

        ]},

    {"name":"Hosted by", "lvl_size":100, "entries":[

        /* WISCA */
        {"icon":"https://events.gnuradio.org/event/21/images/131-wiscaRefRoundV2.jpg",
        "icon_w":1192,
        "icon_h":1193,
        "url":"https://wisca.engineering.asu.edu/",
        "blurb":"The Center for Wireless Information Systems and Computational Architectures (WISCA) places Arizona State University at the research and development nexus of the next wireless revolution.<br><br>To address future wireless communications and sensing for personal, machine, and IoT systems, we need access to more sophisticated, more flexible, and more efficient protocols and computational engines. Current communications approaches are efficient and inflexible or flexible and inefficient. By codeveloping advanced fluid protocols and mixed software define radios with hardware accelerators, we can solve both problems simultaneously. Furthermore, current protocols were developed under the assumption that communications links cannot operate in the presence of interference. This assumption introduces a significant limitation on potential performance. With our new radio architectures, we can break this rigid limitation."}

        ]},

    {"name":"Our Partners", "lvl_size":100, "entries":[

        /* SETI Institute */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/seti_institute.png",
        "icon_w":400,
        "icon_h":243,
        "url":"https://www.seti.org/",
        "blurb":"Founded in 1984, the SETI Institute is a nonprofit, multidisciplinary research and education organization whose mission is to lead humanity’s quest to understand the origins and prevalence of life and intelligence in the universe and share that knowledge with the world. Research at the SETI Institute encompasses the physical and biological sciences and leverages expertise in data analytics, machine learning and advanced signal detection technologies. The SETI Institute is a distinguished research partner for industry, academia and government agencies, including NASA and NSF.<br><br>Three centers anchor work at the SETI Institute: the Carl Sagan Center for the Study of Life in the Universe (research), the Center for Education and the Center for Outreach. The SETI Institute operates the Allen Telescope Array, a 42-element radio array consisting of 6-meter dishes, at the Hat Creek Radio Observatory.<br><br>As of 2020, the SETI Institute manages contracts, grants, and related administration for the GNU Radio project and engenders collaboration with the community around shared interests in science, engineering, and education."},

        /* BSRC */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/bsrc_bl_logo.png",
        "icon_w":750,
        "icon_h":512,
        "url":"https://seti.berkeley.edu/",
        "blurb":"Berkeley SETI Research Center is a world-leader in the search for extraterrestrial intelligence – the quest for a scientific answer to one of humanity’s oldest questions: Are we alone in the Universe? Housed in the Astronomy Department at the University of California, Berkeley, the team at BSRC leads the science program for the $100-million Breakthrough Listen project. Listen uses cutting-edge instrumentation at the world’s most powerful telescopes, gathering, analyzing, and archiving many petabytes of data per year in the search for artificial signals from beyond Earth. BSRC’s director, Dr. Andrew Siemion, is also Chair of SETI Research at the SETI Institute, and several members of the Berkeley science and engineering team are Visiting Scholars at the SETI Institute. A particular focus of these collaborations is the development of new capabilities on the Allen Telescope Array, including deeper integrations with GNU Radio."}

        ]},

    {"name":"PATRON", "lvl_size":88, "entries":[

        /* Duggan Computer Systems 1007 */
        {"icon": "https://events.gnuradio.org/event/8/images/6-DCS_logo.png",
        "icon_w":308,
        "icon_h":144,
        "url":"https://github.com/duggabe",
        "blurb":"Duggan Computer Systems is a software consulting firm specializing in data communication systems and email security. Barry Duggan has been an amateur radio operator since 1953, and now devotes most of his time to the GNU Radio project doing Wiki documentation as well as development of applications using GNU Radio. He is a member of the GRCon23 Organizing Committee."},

        /* Qoherent 1011 */
        {"icon": "https://events.gnuradio.org/event/21/images/143-clogo-black.png",
        "icon_w":1324,
        "icon_h":295,
        "url":"https://www.qoherent.ai/",
        "blurb":"Qoherent helps scientists and engineers explore applications of AI on software-defined radios. We strive to propel intelligent radio innovations through rapid prototyping and design automation tools that are tightly integrated with existing commercial technologies. Focused on the complex spectrum conditions inherent to the space, telecommunications, and defence sectors, we empower our customers to create AI-enabled solutions for more effective sensing and communications systems."},

        /* TMYTEK 1015 */
        {"icon": "https://events.gnuradio.org/event/21/images/146-TMY-logo_C.png",
        "icon_w":1773,
        "icon_h":414,
        "url":"https://tmytek.com/",
        "blurb":"TMYTEK seamlessly integrates advanced mmWave technology with the finest OpenAirInterface (OAI) implementation to deliver a comprehensive 5G FR2 end-to-end testing network suitable for research and small-scale deployment. The mmW-OAI testbed combines millimeter-wave and SDR capabilities with OpenAirInterface (OAI), establishing a versatile testing environment for 5G FR2 networks. It supports gNB and UE emulation, mmWave beamforming, frequency conversion, and offers robust software tools for network monitoring and analysis."}

        ]},

    {"name":"Keynotes", "lvl_size":200, "entries":[

        /* Lindy Elkins-Tanton */
        {"icon": "https://events.gnuradio.org/event/21/attachments/106/231/LindyElkinsTanton.png",
        "icon_w":480,
        "icon_h":480,
        "url":"https://search.asu.edu/profile/2437950",
        "blurb":"Lindy Elkins-Tanton is a planetary scientist, the Principal Investigator of the NASA Psyche mission, and Arizona State University Vice President of the Interplanetary Initiative. Her research concerns the formation and subsequent evolution of rocky planets, and processes of education for the future of society. She has led four field expeditions in Siberia.&nbsp;<br><br>Asteroid (8252) Elkins-Tanton is named for her, as is the mineral elkinstantonite. In 2018 she was elected to the American Academy of Arts &amp; Sciences, in 2021 she was elected to the National Academy of Sciences, and in 2022 William Morrow published her memoir, <i>A Portrait of the Scientist as a Young Woman</i>. Elkins-Tanton received her B.S., M.S., and Ph.D. from MIT."},

        /* Eric Blossom */
        {"icon": "https://events.gnuradio.org/event/21/images/133-eric-blossom.jpeg",
        "icon_w":334,
        "icon_h":373,
        "url":"https://en.wikipedia.org/wiki/Eric_Blossom",
        "blurb":"Eric Blossom founded the GNU Radio project in 2001 and ran it as a full-time undertaking through 2010. Eric was responsible for the original architecture and implementation of GNU Radio, including the fundamental concepts of blocks, streaming data, the buffering system, and the first two generations of schedulers. If there's something about GNU Radio that bugs you, there is a good chance that Eric is to blame.<br><br>He is deeply grateful for all of the people who have used and supported GNU Radio over the years and particularly to those who have worked to evolve it into a more powerful and useful tool. Eric has spent the last 6 years at Planet Labs, one of the leading &quot;new space&quot; companies, building a family of high speed radios used to downlink imagery of earth from Planet's constellation of satellites. These satellites are in a 500km orbit, and the radios downlink imagery at &gt; 1.5Gb/s, totaling terabytes of data per day across the constellation."}

        ]},

    {"name":"Invited Speakers", "lvl_size":200, "entries":[

        /* Constantine Balanis */
        {"icon": "https://events.gnuradio.org/event/21/images/141-cbalanis.png",
        "icon_w":480,
        "icon_h":480,
        "url":"https://search.asu.edu/profile/21741",
        "blurb":"Constantine Balanis is a member of the Emeritus College and had been with ASU's School of Electrial, Computer and Energy Engineering (formerly Department of Electrical Engineering) since 1983, where he was a Regents Professor. His research interests are in computational electromagnetics, smart antennas, antennas, microwaves, and multipath propagation.<br><br>He received in 2004 an Honorary Doctorate from the Aristotle University of Thessaloniki, the 2005 Chen-To Tai Distinguished Educator Award from the IEEE AP Society, the 2000 IEEE Millennium Award, the 1996 Graduate Mentor Award, Arizona State University; the 1992 Special Professionalism Award from the IEEE Phoenix Section, the 1989 IEEE Region 6 Individual Achievement Award, and the 1987-1988 Graduate Teaching Excellence Award, School of Engineering, ASU. Balanis is a Life Fellow of the IEEE, Distinguished Lecturer for the IEEE Antennas and Propagation Society, and editor for the Morgan & Claypool Publishers series on &quot;Computational Electromagnetics&quot; and on &quot;Antennas and Propagation&quot;."},

        /* Ralph Steinhagen */
        {"icon": "https://events.gnuradio.org/event/21/images/144-Ralph_Steinhagen.png",
        "icon_w":480,
        "icon_h":321,
        "url":"https://www.linkedin.com/in/ralphsteinhagen/",
        "blurb":"Dr. Ralph J. Steinhagen, a senior scientist at FAIR (Facility for Anti-Proton and Ion Research), has worked in the fields of accelerator physics and technology for over 25 years. Drawing parallels between large-scale scientific research and team sports, he cherishes having &quot;scored critical goals for the team&quot;, especially with his contributions to feedback control and high-frequency beam RF instrumentation at CERN’s LHC, instrumental in the discovery of the Higgs Boson.<br><br>Recognised by institutions such as the Swiss Confederation, IEEE, and APS, he enjoys a hands-on approach to science and technical leadership in fostering global collaborations.<br><br>Dr. Steinhagen leads feedback design and system integration activities at FAIR, where his team is deeply committed to GNU Radio. He ardently supports the transformative journey of GNU Radio 4.0 on a technical level, aiming to position it at the forefront of software-defined radio (SDR) applications."}

        ]}
  ]
}

var spons24 = {
  "levels": [
    {"name":"DIAMOND", "lvl_size":180, "entries":[

        /* NI / Ettus Research */
        {"icon":"https://events.gnuradio.org/event/8/images/26-Ettus_NI_Lockup_COLOR_trim.jpg",
        "icon_w":1042,
        "icon_h":472,
        "url":"https://www.ettus.com/",
        "blurb":"Ettus Research, an NI brand, is the world’s leading supplier of software-defined radio platforms, combining ease of use and a robust open-source software community. From wireless research to deployment, we empower you with the SDR tools, systems, and support you need to bring the next generation of wireless technology to life."},

        /* Aaronia */
        {"icon":"https://events.gnuradio.org/event/24/images/172-Aaronia_Logo_rgb_300px.png",
        "icon_w":300,
        "icon_h":147,
        "url":"https://aaronia.com/",
        "blurb":"Aaronia is an internationally-renowned high-tech company headquartered in Strickscheid, Germany. Since 2003, we specialize in measuring, tracking and monitoring technology. Our experience, products and patents enable us to provide comprehensive and intelligent drone detection and defense systems with an extremely high range, precision and reliability."}

        ]},

    {"name":"PLATINUM", "lvl_size":120, "entries":[
        ]},

    {"name":"GOLD", "lvl_size":100, "entries":[

        /* Epiq Solutions */
        {"icon": "https://events.gnuradio.org/event/24/images/170-Primary_FullColor-_1_.png",
        "icon_w":6177,
        "icon_h":1324,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."},

        /* Peraton Labs */
        {"icon":"https://events.gnuradio.org/event/8/images/98-Peraton%20Labs%20logo-trimmed-extra.png",
        "icon_w":1332,
        "icon_h":303,
        "url":"https://www.peratonlabs.com/",
        "blurb":"What matters to our customers, matters to us. ​We create new technologies, advance emerging technologies and deliver innovative solutions that work at scale and in complex, real-world environments—making an impact in defense, communications, energy, transportation, finance and life sciences.​"},

        /* Deepwave Digital */
        {"icon":"https://events.gnuradio.org/event/8/images/18-deepwave_trim.png",
        "icon_w":1051,
        "icon_h":810,
        "url":"https://deepwavedigital.com/",
        "blurb":"Deepwave is an innovative startup that supplies AI-enabled hardware and software solutions for a wide range of radio frequency (RF) applications at the edge. Our software defined radios (SDRs) tightly couple GPU, CPU, and FPGA processors, and include the software tools expected by a modern software engineer. This includes native support for most AI frameworks, signal processing toolboxes, container environments, and parallel computing tools. By incorporating AI functionality, customers are able to improve performance of many signal processing applications including signal classification and cognitive radio."}

        ]},

    {"name":"SILVER", "lvl_size":90, "entries":[

        /* Red Wire Technology */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, available on our website.  RWT offers design services - hardware and RF design, embedded software design, and digital signal processing solutions for both turn-key and developer focused applications."}

        ]},

    {"name":"HOSTS", "lvl_size":132, "entries":[
        ]},

    {"name":"PARTNERS", "lvl_size":132, "entries":[

        /* SETI Institute */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/seti_institute.png",
        "icon_w":400,
        "icon_h":243,
        "url":"https://www.seti.org/",
        "blurb":"Founded in 1984, the SETI Institute is a nonprofit, multidisciplinary research and education organization whose mission is to lead humanity’s quest to understand the origins and prevalence of life and intelligence in the universe and share that knowledge with the world. Research at the SETI Institute encompasses the physical and biological sciences and leverages expertise in data analytics, machine learning and advanced signal detection technologies. The SETI Institute is a distinguished research partner for industry, academia and government agencies, including NASA and NSF.<br><br>Three centers anchor work at the SETI Institute: the Carl Sagan Center for the Study of Life in the Universe (research), the Center for Education and the Center for Outreach. The SETI Institute operates the Allen Telescope Array, a 42-element radio array consisting of 6-meter dishes, at the Hat Creek Radio Observatory.<br><br>As of 2020, the SETI Institute manages contracts, grants, and related administration for the GNU Radio project and engenders collaboration with the community around shared interests in science, engineering, and education."},

        /* BSRC */
        {"icon":"https://www.gnuradio.org/grcon/grcon20/sponsors/bsrc_bl_logo.png",
        "icon_w":750,
        "icon_h":512,
        "url":"https://seti.berkeley.edu/",
        "blurb":"Berkeley SETI Research Center is a world-leader in the search for extraterrestrial intelligence – the quest for a scientific answer to one of humanity’s oldest questions: Are we alone in the Universe? Housed in the Astronomy Department at the University of California, Berkeley, the team at BSRC leads the science program for the $100-million Breakthrough Listen project. Listen uses cutting-edge instrumentation at the world’s most powerful telescopes, gathering, analyzing, and archiving many petabytes of data per year in the search for artificial signals from beyond Earth. BSRC’s director, Dr. Andrew Siemion, is also Chair of SETI Research at the SETI Institute, and several members of the Berkeley science and engineering team are Visiting Scholars at the SETI Institute. A particular focus of these collaborations is the development of new capabilities on the Allen Telescope Array, including deeper integrations with GNU Radio."}

        ]},

    {"name":"PATRON", "lvl_size":88, "entries":[

        /* Qoherent */
        {"icon": "https://events.gnuradio.org/event/24/images/171-Qoherent-logo-fullcolour-whitesquare.png",
        "icon_w":1324,
        "icon_h":1324,
        "url":"https://www.qoherent.ai/",
        "blurb":"Qoherent helps scientists and engineers explore applications of AI on software-defined radios. We strive to propel intelligent radio innovations through rapid prototyping and design automation tools that are tightly integrated with existing commercial technologies. Focused on the complex spectrum conditions inherent to the space, telecommunications, and defense sectors, we empower our customers to create AI-enabled solutions for more effective sensing and communications systems."}

        ]},

    {"name":"Keynotes", "lvl_size":200, "entries":[

        /* Jack Dongarra */
        {"icon": "https://netlib.org/utk/people/JackDongarra/images/jack-2022-web2.jpg",
        "icon_w":2141,
        "icon_h":2060,
        "url":"https://netlib.org/utk/people/JackDongarra/",
        "blurb":"Jack Dongarra received a Bachelor of Science in Mathematics from Chicago State University in 1972 and a Master of Science in Computer Science from the Illinois Institute of Technology in 1973. He received his Ph.D. in Applied Mathematics from the University of New Mexico in 1980. He worked at the Argonne National Laboratory until 1989, becoming a senior scientist. He now holds an appointment as University Distinguished Professor of Computer Science in the Electrical Engineering and Computer Science Department at the University of Tennessee and holds the title of Distinguished Research Staff in the Computer Science and Mathematics Division at Oak Ridge National Laboratory (ORNL); Turing Fellow at Manchester University; an Adjunct Professor in the Computer Science Department at Rice University. He is the director of the Innovative Computing Laboratory at the University of Tennessee. He is also the director of the Center for Information Technology Research at the University of Tennessee which coordinates and facilitates IT research efforts at the University."},

        /* Shahriar Shahramian */
        {"icon": "http://cwc.ucsd.edu/sites/cwc.ucsd.edu/files/2022-02/Shahriar%20Shahramian%20Picture.jpg",
        "icon_w":314,
        "icon_h":383,
        "url":"http://cwc.ucsd.edu/people/shahriar-shahramian",
        "blurb":"Shahriar Shahramian (SM ’06) received his Ph.D. degree from University of Toronto in 2010 where he focused on the design of mm-wave data converters and transceivers. Shahriar has been with the Bell Laboratories – Nokia since 2009 and is currently the Director of the Communication & Sensing ASICs Research Group. He is also the chair of the mm-Wave & THz subcommittee of IEEE BCICTS and member of the technical program committee of IEEE RFIC & ISSCC. He is also a guest Editor of the IEEE Journal of Solid-State Circuits (JSSC). His research focus includes the design of mm-wave wireless and wireline integrated circuits and systems. Shahriar is a Bell Labs Fellow and leads the design and architecture of several state-of-the-art ASICs for optical coherent and wireless backhaul products.<br><br>Shahriar has been the recipient of Ontario Graduate Scholarship, University of Toronto Fellowship and the best paper award at the CSICS Symposium in 2005, 2015 and RFIC Symposium in 2015, 2020 and ISSCC in 2018. He holds an Adjunct Associate Professor position at Columbia University, has received several teaching awards and is the founder and host of The Signal Path educational video series."},

        /* Philip Erickson */
        {"icon": "https://www.haystack.mit.edu/wp-content/uploads/2022/09/headshot_2022_erickson_phil_01-aspect-ratio-600-600-1200x1200-c-default.jpg",
        "icon_w":1200,
        "icon_h":1200,
        "url":"https://www.haystack.mit.edu/researcher/philip-j-erickson/",
        "blurb":"Philip Erickson is director of MIT's Haystack Observatory and a Principal Research Scientist at MIT.  MIT Haystack is a multi-disciplinary radio and radar observatory, conducting fundamental research for a variety of sponsors in the fields of radio astronomy, geospace/near-Earth space, very long baseline interferometry, and geodesy.  Techniques pioneered at Haystack include active and passive radio-based experiments and data analysis using a variety of remote sensing approaches involving ground- and space-based data.  Phil's background concentrates on the experimental techniques, signal processing, and first-principles physics of near-Earth ionospheric (charged) and thermospheric (neutral) remote sensing using high power large aperture radars, software radars and software radio architectures, and plasma physics.  Phil also is a co-director of the education and public outreach efforts at MIT Haystack, spanning undergraduate research programs, graduate student interactions, K–12 classroom units and outreach, and public Observatory tours and lectures.  He has an electrical engineering background and received a PhD in space plasma physics from Cornell University in 1998."}

        ]},

    {"name":"Invited Speakers", "lvl_size":200, "entries":[
        ]}
  ]
}

var skeleton = {    /* ready for the next year */
  "levels": [
    {"name":"DIAMOND", "lvl_size":180, "entries":[
        ]},

    {"name":"PLATINUM", "lvl_size":120, "entries":[
        ]},

    {"name":"GOLD", "lvl_size":100, "entries":[
        ]},

    {"name":"SILVER", "lvl_size":90, "entries":[
        ]},

    {"name":"HOSTS", "lvl_size":132, "entries":[
        ]},

    {"name":"PARTNERS", "lvl_size":132, "entries":[
        ]},

    {"name":"PATRON", "lvl_size":88, "entries":[
        ]},

    {"name":"Keynotes", "lvl_size":200, "entries":[
        ]},

    {"name":"Invited Speakers", "lvl_size":200, "entries":[
        ]}
  ]
}

document.body.onload = function() {myFunction()};

/* marker */

function myFunction()
    {
    // console.log ("myFunction()");
    var w_loc = window.location.href;
    var pos1 = w_loc.search("event/18");     // GRCon22
    var pos2 = w_loc.search("Test");         // for testing
    var pos3 = w_loc.search("event/8");      // GRCon21
    var pos4 = w_loc.search("event/21");     // GRCon23
    var pos7 = w_loc.search("event/24");     // GRCon24
    if ((pos2 > 0) || (pos7 > 0))
        {
        console.log ("GRCon 24");
        /* always call "function sponsors22()" with data for current year */
        sponsors22 (spons24);    // GRCon 24
        }
    else if (pos4 > 0)
        {
        console.log ("GRCon 23");
        sponsors22 (spons23);    // GRCon 23
        }
    else if (pos1 > 0)
        {
        console.log ("GRCon 22");
        sponsors22 (spons22);    // GRCon 22
        }
    else if (pos3 > 0)
        {
        console.log ("GRCon 21");
        sponsors22 (spons21);    // GRCon 21
        }
    }   // end myFunction()

function sponsors22 (myObj)
    {
    var _num_levels = myObj.levels.length;
    console.log ("_num_levels", _num_levels);
    const DIAMOND = 0;
    const PLATINUM = 1;
    const GOLD = 2;
    const SILVER = 3;
    const HOSTS = 4;
    const PARTNERS = 5;
    const PATRON = 6;
    const KEYNOTE = 7;
    const SPEAKER = 8;

    var sa = document.getElementsByClassName("footer "); // footer section (yes, it has a trailing space)
    var vers = document.getElementsByClassName("version");
    var I_vers = vers[0].innerHTML
    console.log ("Indico version:", I_vers);
    sa[0].innerHTML = "<br>";   // wipe out footer
    var w_loc = window.location.href;
    var pos5 = w_loc.search("Test4");      // for testing the Sponsors page
    var pos6 = w_loc.search("Test5");      // for testing the Keynotes page

    /* KEYNOTES */
    if ((w_loc == ("https://events.gnuradio.org/event/21/page/111-keynote-speakers")) ||
        (w_loc == ("https://events.gnuradio.org/event/24/page/147-keynote-speakers")) ||
        (pos6 > 0))
        {
        // build Keynote page content
        var i;
        var j;
        var pc = document.getElementsByClassName("page-content");    // page-content
        pc[0].innerHTML = "";   // wipe out page content
        for (let i = KEYNOTE; i <= SPEAKER; i++)
            {
            var _lel = myObj.levels[i].entries.length;  // how many entries
            if (_lel > 0)
                {
                var _br = document.createElement("br");
                pc[0].appendChild(_br);
                var _hr = document.createElement("hr");
                pc[0].appendChild(_hr);
                var _h2 = document.createElement("h2");
                _h2.setAttribute("class", "u_cent");
                _h2.innerHTML = myObj.levels[i].name;
                pc[0].appendChild(_h2);
                var _hr = document.createElement("hr");
                pc[0].appendChild(_hr);
                var _br = document.createElement("br");
                pc[0].appendChild(_br);
                for (j in myObj.levels[i].entries) 
                    {
                    /* create table */
                    var tbl = document.createElement("TABLE");
                    tbl.setAttribute("class", "u_table2");
                    /* create data row */
                    var t_tr = document.createElement("TR");
                    /* create data element */
                    var t_td = document.createElement("TD");    // icon
                    t_td.setAttribute("class", "u_tdl");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_h = 350 / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                    "<img src=\"" + myObj.levels[i].entries[j].icon  +
                    "\" style=\"width:350px;height:" + _td_h + "px;\"></a>";
                    // console.log (anchor);
                    t_td.innerHTML = anchor;
                    t_tr.appendChild(t_td);
                    var t_td = document.createElement("TD");    // blurb
                    t_td.setAttribute("class", "u_tdr");
                    t_td.innerHTML = myObj.levels[i].entries[j].blurb;
                    t_tr.appendChild(t_td);
                    /* attach row to table */
                    tbl.appendChild(t_tr);
                    /* attach table to content */
                    pc[0].appendChild(tbl);
                    }
                }
            }
        }   // end Keynote page content

    /* NOT SPONSORS */
    if ((w_loc != ("https://events.gnuradio.org/event/18/page/60-our-sponsors")) &&
        (w_loc != ("https://events.gnuradio.org/event/8/page/5-sponsors")) &&
        (w_loc != ("https://events.gnuradio.org/event/21/page/94-our-sponsors")) &&
        (w_loc != ("https://events.gnuradio.org/event/24/page/143-our-sponsors")) &&
        (pos5 < 0))
        {   // not Sponsors page
        var _num_sponsors = 0;
        for (let i = DIAMOND; i <= SILVER; i++)
            {
            _num_sponsors += myObj.levels[i].entries.length;  // how many entries
            }
        console.log ("num sponsors = ", _num_sponsors);

        if (_num_sponsors > 0)
            {
            // build sponsor section of footer
            sa[0].innerHTML = '<hr><h2 class="u_cent">Our Sponsors</h2>';
        /*  DIAMOND to SILVER */
            for (let i = DIAMOND; i <= SILVER; i++)
                {
                /* create table row */
                var tbl = document.createElement("TABLE");
                tbl.setAttribute("class", "u_table");
                /* create header row */
                var t_tr = document.createElement("TR");
                t_tr.setAttribute("class", "u_tr");
                /* for each entry */
            
                var _lel = myObj.levels[i].entries.length;  // how many entries
                if (_lel > 0)
                    {
                    var t_th = document.createElement("TH");
                    t_th.setAttribute("class", "u_th");
                    if (_lel > 1)
                        t_th.setAttribute("colspan", _lel);
                    /* create data row */
                    t_th.innerHTML = myObj.levels[i].name;
                    /* attach data to row */
                    t_tr.appendChild(t_th);
                    }
                tbl.appendChild(t_tr);
                /* create data row */
                var t_tr = document.createElement("TR");
                /* for each entry */
                for (j in myObj.levels[i].entries) 
                    {
                    /* create data element */
                    var t_td = document.createElement("TD");
                    t_td.setAttribute("class", "u_td");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_w = myObj.levels[i].lvl_size;
                    // console.log (_td_w);
                    var _td_h = _td_w / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                        "<img src=\"" + myObj.levels[i].entries[j].icon  +
                        "\" style=\"width:" + _td_w + "px;height:" + _td_h + "px;\"></a>";
                    // console.log (anchor);
                    t_td.innerHTML = anchor;
                    t_tr.appendChild(t_td);
                    tbl.appendChild(t_tr);
                    }
                /* attach row to table */
                tbl.appendChild(t_tr);
                /* attach table to content */
                sa[0].appendChild(tbl);
                }       // end DIAMOND to SILVER
            }   // end if sponsors

        /*  HOSTS and PARTNERS */
        var _num_sponsors = 0;
        for (let i = HOSTS; i < PATRON; i++)
            {
            _num_sponsors += myObj.levels[i].entries.length;  // how many entries
            }
        console.log ("Hosts and Partners = ", _num_sponsors);
        if (_num_sponsors > 0)
            {
            /* create table row */
            var tbl = document.createElement("TABLE");
            tbl.setAttribute("class", "u_table");
            /* create header row */
            var t_tr = document.createElement("TR");
            t_tr.setAttribute("class", "u_tr");
            /* for each entry */
            for (let i = HOSTS; i < PATRON; i++)
                {
                var _lel = myObj.levels[i].entries.length;  // how many entries
                if (_lel > 0)
                    {
                    var t_th = document.createElement("TH");
                    t_th.setAttribute("class", "u_th");
                    if (_lel > 1)
                        t_th.setAttribute("colspan", _lel);
                    /* create data row */
                    t_th.innerHTML = myObj.levels[i].name;
                    /* attach data to row */
                    t_tr.appendChild(t_th);
                    }
                }
            tbl.appendChild(t_tr);
            /* create data row */
            var t_tr = document.createElement("TR");
            /* for each entry */
            for (let i = HOSTS; i < PATRON; i++)
                {
                for (j in myObj.levels[i].entries) 
                    {
                    /* create data element */
                    var t_td = document.createElement("TD");
                    t_td.setAttribute("class", "u_td");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_w = myObj.levels[i].lvl_size;
                    // console.log (_td_w);
                    var _td_h = _td_w / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                        "<img src=\"" + myObj.levels[i].entries[j].icon  +
                        "\" style=\"width:" + _td_w + "px;height:" + _td_h + "px;\"></a>";
                    // console.log (anchor);
                    t_td.innerHTML = anchor;
                    t_tr.appendChild(t_td);
                    tbl.appendChild(t_tr);
                    }
                }
            /* attach row to table */
            tbl.appendChild(t_tr);
            /* attach table to content */
            sa[0].appendChild(tbl);
            var _br = document.createElement("br");
            sa[0].appendChild(_br);
            }   // end HOSTS and PARTNERS
        }   // end not Sponsors page

    else
        /* SPONSORS */
        {
        // build Sponsors page content
        var i;
        var j;
        var pc = document.getElementsByClassName("page-content");    // page-content
        var txt = pc[0].innerHTML;      // get the existing content
        for (let i = DIAMOND; i <= PATRON; i++)
            {
            var _lel = myObj.levels[i].entries.length;  // how many entries
            // console.log ("Sponsors[i]", _lel);
            if (_lel > 0)
                {
                var _br = document.createElement("br");
                pc[0].appendChild(_br);
                var _hr = document.createElement("hr");
                pc[0].appendChild(_hr);
                var _h2 = document.createElement("h2");
                _h2.setAttribute("class", "u_cent");
                _h2.innerHTML = myObj.levels[i].name;
                pc[0].appendChild(_h2);
                var _hr = document.createElement("hr");
                pc[0].appendChild(_hr);
                var _br = document.createElement("br");
                pc[0].appendChild(_br);
                for (j in myObj.levels[i].entries) 
                    {
                    /* create table */
                    var tbl = document.createElement("TABLE");
                    tbl.setAttribute("class", "u_table2");
                    /* create data row */
                    var t_tr = document.createElement("TR");
                    /* create data element */
                    var t_td = document.createElement("TD");    // icon
                    t_td.setAttribute("class", "u_tdl");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_h = 200 / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                    "<img src=\"" + myObj.levels[i].entries[j].icon  +
                    "\" style=\"width:200px;height:" + _td_h + "px;\"></a>";
                    // console.log (anchor);
                    t_td.innerHTML = anchor;
                    t_tr.appendChild(t_td);
                    var t_td = document.createElement("TD");    // blurb
                    t_td.setAttribute("class", "u_tdr");
                    t_td.innerHTML = myObj.levels[i].entries[j].blurb;
                    t_tr.appendChild(t_td);
                    /* attach row to table */
                    tbl.appendChild(t_tr);
                    /* attach table to content */
                    pc[0].appendChild(tbl);
                    }
                }
            }
        }   // end Sponsors page content

    /* create last two lines of footer */
    var ftr1 = document.createElement("DIV");
    ftr1.setAttribute("class", "u_cent");
    ftr1.innerHTML = "Need help with GRCon? <a href=\"mailto:grcon@gnuradio.org\">Contact organisers</a> | Need help with this page? <a href=\"mailto:indico@sysmail.gnuradio.org\">Contact webmaster</a>";
    sa[0].appendChild(ftr1);

    var ftr2 = document.createElement("DIV");
    ftr2.innerHTML = "<img src=\"https://events.gnuradio.org/images/indico_small.png\" style=\"width:100px;height:40px;\">Powered by Indico ";
    var ftr3 = document.createTextNode(I_vers);  // Indico version
    ftr2.appendChild(ftr3);
    sa[0].appendChild(ftr2);

    /* add timezone offset */
    var tz = document.getElementsByClassName("timezone");
    var w_loc = window.location.href;
    var pos1 = w_loc.search("event/18");     // GRCon22
    var pos2 = w_loc.search("Test");         // for testing
    var pos3 = w_loc.search("event/8");      // GRCon21
    var pos4 = w_loc.search("event/21");     // GRCon23
    var pos5 = w_loc.search("event/24");     // GRCon24
    if ((pos1 > 0) || (pos2 > 0) || (pos3 > 0) || (pos5 > 0))
        var t1 = document.createTextNode(" (UTC - 4)");
    else if (pos4 > 0)
        var t1 = document.createTextNode(" (UTC - 7)");
    tz[0].appendChild(t1);

    /* adjust start time */
    pos2 = w_loc.search("Test3");       // for testing
    if ((pos2 > 0) || (w_loc == ("https://events.gnuradio.org/event/24/"))) // GRCon Overview
        {
        var ig = document.getElementsByClassName("infogrid");
        var txt = ig[0].innerHTML;      // get the existing content
        var pos6 = txt.indexOf("08:00");
        if (pos6 > 0)
            {
            var txt2 = txt.replace("08:00","13:00");    // starts at 1PM
            var txt3 = txt2.replace("US/Eastern","US/Eastern (UTC - 4)");
            ig[0].innerHTML = txt3;
            }
        }
    }   // end sponsors22()



