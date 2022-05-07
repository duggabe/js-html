/* sponsors.js */

/* 19 Mar 2022  GRCon22 version */
/* 20 Mar 2022  don't show "Our Sponsors" if there aren't any */
/* 24 Mar 2022  major restructuring to handle GRCon21 and GRCon22 */
/* 07 Apr 2022  changed sponsors page */
/* 06 May 2022  Marc modified the style of the table in the footer */

"use strict"

var spons21 = {
  "levels": [
    {"name":"DIAMOND", "entries":[

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

    {"name":"PLATINUM", "entries":[

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

    {"name":"GOLD", "entries":[

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
        "blurb":"Our mission is to empower every person and every organization on the planet to achieve more."},

        /* Deepwave Digital 7 */
        {"icon":"https://events.gnuradio.org/event/8/images/18-deepwave_trim.png",
        "icon_w":1051,
        "icon_h":810,
        "url":"https://deepwavedigital.com/",
        "blurb":"Deepwave Digital manufactures the AIR-T. AIR-T is the first software-defined radio (SDR) with an embedded NVIDIA GPU with an FPGA and an RF direct conversion receiver. The AIR-T allows for a fully autonomous SDR by giving the AI engine complete control over the hardware. It integrates three digital processors that provide the functionality needed for any signal processing application: FPGA for strict real-time operations, GPU for highly parallel processing and deep learning, and CPU for control, I/O, DSP, and software applications."},

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
        "blurb":"Berkeley SETI Research Center is a world-leader in the search for extraterrestrial intelligence – the quest for a scientific answer to one of humanity’s oldest questions: Are we alone in the Universe? Housed in the Astronomy Department at the University of California, Berkeley, the team at BSRC leads the science program for the $100-million Breakthrough Listen project. Listen uses cutting-edge instrumentation at the world’s most powerful telescopes, gathering, analyzing, and archiving many petabytes of data per year in the search for artificial signals from beyond Earth. BSRC’s director, Dr. Andrew Siemion, is also Chair of SETI Research at the SETI Institute, and several members of the Berkeley science and engineering team are Visiting Scholars at the SETI Institute. A particular focus of these collaborations is the development of new capabilities on the Allen Telescope Array, including deeper integrations with GNU Radio."},

        /* ARDC 18 */
        {"icon":"https://events.gnuradio.org/event/8/images/29-ARDC_trim.png",
        "icon_w":300,
        "icon_h":144,
        "url":"https://www.ampr.org/",
        "blurb":"Amateur Radio Digital Communications (ARDC) supports and promotes amateur radio, scientific research, education, experimentation, development, open access, and innovation in information and communications technology. Visit our website or email giving@ardc.net <mailto:giving@ardc.net> to learn how we can help make your idea real."}

        ]},

    {"name":"SILVER", "entries":[

        /* Vesperix 12 */
        {"icon":"https://events.gnuradio.org/event/8/images/24-Vesperix-300.png",
        "icon_w":1039,
        "icon_h":362,
        "url":"http://vesperix.com/",
        "blurb":"Vesperix Corporation is a small business dedicated to innovative research and development for government and corporate customers. Our research focuses on novel methods for communication, sensing, and navigation."},

/*      Red Wire Technology */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, custom RF circuits, digital signal processing, and FPGA solutions for both turn-key and developer focused applications."}

        ]},

    {"name":"PATRON", "entries":[

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

        ]}
  ]
}

var spons22 = {
  "levels": [
    {"name":"DIAMOND", "entries":[

        ]},

    {"name":"PLATINUM", "entries":[

        /* Epiq Solutions 4 */
        {"icon": "https://www.gnuradio.org/grcon/grcon20/sponsors/epiq.png",
        "icon_w":862,
        "icon_h":564,
        "url":"https://epiqsolutions.com/",
        "blurb":"Epiq Solutions develops cutting edge RF tools that provide situational awareness and detailed insight into RF environments to identify and take action against wireless threats. With more than a decade serving government-focused industries, Epiq Solutions understands how important speed, cost, and performance are for defense and security applications. Our radically small, state-of-the-art SDR transceiver modules and turnkey RF sensing tools lead the way in size, weight, and low-power consumption. Whether the need is to develop mission-critical defense communications for the battlefield or to protect sensitive information, Epiq Solutions is the trusted RF solution provider."}

        ]},

    {"name":"GOLD", "entries":[

        /* Peraton Labs 1 */
        {"icon":"https://events.gnuradio.org/event/8/images/11-Peraton%20Labs%20logo-trimmed.png",
        "icon_w":1236,
        "icon_h":619,
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
        "blurb":"DeepSig is pioneering the use of deep learning for signal processing and radio systems, developing fundamentally new methodologies for the design and optimization of wireless communications. Our approach uses AI to learn optimized models directly from data rather than manually designing specialized algorithms, creating communications systems that excel in complex environments and are optimized end-to-end. By creating new tools, algorithms, and approaches for signal processing systems, DeepSig is able to achieve unparalleled results in system performance. DeepSig’s engineers have published many of the seminal scientific papers in this area, and are the technical leaders in building real-world practical systems with this technology."}

       ]},

    {"name":"SILVER", "entries":[

/*      Red Wire Technology 3 */
        {"icon":"https://events.gnuradio.org/event/8/images/84-RedWireTechnologies.png",
        "icon_w":636,
        "icon_h":183,
        "url":"https://www.redwiretechnology.com/",
        "blurb":"Red Wire Technologies is a customer focused systems engineering company that is passionate about developing innovative solutions to meet complex challenges. Our expertise and experience covers the entire R&D process chain from concept to finished product.  Red Wire produces fully embedded high-performance software defined radios, custom RF circuits, digital signal processing, and FPGA solutions for both turn-key and developer focused applications."}

        ]},

    {"name":"PATRON", "entries":[

        ]}
  ]
}

document.body.onload = function() {myFunction()};

function myFunction()
    {
    console.log ("myFunction()");
    var w_loc = window.location.href;
    var pos1 = w_loc.search("event/18");     // GRCon22
    var pos2 = w_loc.search("Test");         // for testing
    var pos3 = w_loc.search("event/8");      // GRCon21
    if ((pos1 > 0) || (pos2 > 0))
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
    console.log ("sponsors22");
    var _num_levels = myObj.levels.length;
    const DIAMOND = 0;
    const PLATINUM = 1;
    const PATRON = _num_levels-1;
    var sa = document.getElementsByClassName("footer "); // footer section (yes, it has a trailing space)
    sa[0].innerHTML = "<br>";   // wipe out footer
    var w_loc = window.location.href;
    var pos4 = w_loc.search("Test4");      // for testing the Sponsors page
    if ((w_loc != ("https://events.gnuradio.org/event/18/page/60-our-sponsors")) &&
        (w_loc != ("https://events.gnuradio.org/event/8/page/5-sponsors")) &&
        (pos4 < 0))
        {   // not Sponsors page
        var _num_sponsors = 0;
        for (let i = 0; i < _num_levels; i++)
            {
            _num_sponsors += myObj.levels[i].entries.length;  // how many entries
            }
        console.log ("num sponsors = ", _num_sponsors);
        if (_num_sponsors > 0)
            {
            // build sponsor section of footer
            sa[0].innerHTML = '<hr><h2 class="u_cent">Our Sponsors</h2><br>';

            /* create table */
            var tbl = document.createElement("TABLE");
            tbl.setAttribute("class", "u_table");
            /* create header row */
            var t_tr = document.createElement("TR");
            t_tr.setAttribute("class", "u_tr");
            /* for each entry */
            for (let i = DIAMOND; i < PLATINUM; i++)
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
            for (let i = DIAMOND; i < PLATINUM; i++)
                {
                for (j in myObj.levels[i].entries) 
                    {
                    /* create data element */
                    var t_td = document.createElement("TD");
                    t_td.setAttribute("class", "u_td");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_h = 200 / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                        "<img src=\"" + myObj.levels[i].entries[j].icon  +
                        "\" style=\"width:200px;height:" + _td_h + "px;\"></a>";
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

            /* create table */
            var tbl = document.createElement("TABLE");
            tbl.setAttribute("class", "u_table");
            /* create header row */
            var t_tr = document.createElement("TR");
            t_tr.setAttribute("class", "u_tr");
            /* for each entry */
            for (let i = PLATINUM; i < PATRON; i++)       // do all except Patrons 
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
            for (let i = PLATINUM; i < PATRON; i++)
                {
                for (j in myObj.levels[i].entries) 
                    {
                    /* create data element */
                    var t_td = document.createElement("TD");
                    t_td.setAttribute("class", "u_td");
                    var aspect = (myObj.levels[i].entries[j].icon_w / myObj.levels[i].entries[j].icon_h);
                    var _td_h = 88 / aspect;
                    var anchor = "<a href=\"" + myObj.levels[i].entries[j].url + "\">" +
                        "<img src=\"" + myObj.levels[i].entries[j].icon  +
                        "\" style=\"width:88px;height:" + _td_h + "px;\"></a>";
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

            }   // end if sponsors
        }   // end not Sponsors page
    else
        {
        // build Sponsors page content
        var i;
        var j;
        var pc = document.getElementsByClassName("page-content");    // page-content
        var txt = pc[0].innerHTML;      // get the existing content
        for (i in myObj.levels) 
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
    ftr2.innerHTML = "<img src=\"https://events.gnuradio.org/images/indico_small.png\" style=\"width:100px;height:40px;\">Powered by Indico v3.0.3";
    sa[0].appendChild(ftr2);

    /* add timezone offset */
    var tz = document.getElementsByClassName("timezone");
    var t1 = document.createTextNode(" (UTC - 4)");
    tz[0].appendChild(t1);
    }   // end sponsors22()

