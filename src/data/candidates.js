const candidates = {
  area1: [
    {
      Surname: "CAREY",
      ChristianName: "John",
      Party: "WA Labor",
      Biography:
        "42 year-old Carey has been the Mayor of the City of Vincent since 2013, resigning at the end of 2016 to contest this seat. He was first elected to council in 2011 and polled more than 80% in the 2015 Mayoral contest. Carey previously worked on the staff of Labor Premiers Geoff Gallop and Alan Carpenter. He was the co-founder of the Beaufort Street Network and inaugural Chair of the Beaufort Street Festival.",
      CandidateWebpage: "https://www.facebook.com/johncareyperth/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_ALP_Carey.jpg",
    },
    {
      Surname: "BALLINGALL, Ben",
      ChristianName: "Ben",
      Party: "Flux The System!",
      Biography: "Ballingal is a Politics and International Relations student.",
      CandidateWebpage: "https://voteflux.org/wa/candidates/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_FLX_Ballingall.jpg",
    },
    {
      Surname: "HANSON",
      ChristianName: "Matt",
      Party: "Animal Justice Party",
      Biography:
        "\nHanson moved to rural Western Australia at the age of one, emigrating from New Zealand and has since lived in Perth for over twenty years. He obtained his Bachelor of Science, majoring in psychology, from University of Western Australia in 2009. In recent years, Hanson has established his own drum teaching business while working as a professional musician. He is a board member at Animal Liberation Western Australia, a not-for-profit, vegan, animal rights organisation.",
      CandidateWebpage: "https://www.facebook.com/AJPWA/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_AJP_Hanson.jpg",
    },
    {
      Surname: "MILLIGAN",
      ChristianName: "Hannah",
      Party: "The Greens (WA)",
      Biography: "Milligan is a criminal lawyer who lives and works in Perth.",
      CandidateWebpage: "http://greens.org.au/wa/hannah-milligan",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_GRN_Milligan.jpg",
    },
    {
      Surname: "MOLYNEUX",
      ChristianName: "Ian",
      Party: "Julie Matheson for Western Australia",
      Biography:
        "Molyneux is the former Chairman of the Heritage Council and a former Fremantle City Architect.",
      CandidateWebpage: "https://juliematheson.com.au/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_JMW_Molyneux.jpg",
    },
    {
      Surname: "HYDE",
      ChristianName: "Archie",
      Party: "Micro Business Party",
      Biography:
        "Hyde was born in New Zealand and arrived in Perth in 1980, He runs a business working as a service provider to the energy and civil infrastructure sectors.",
      CandidateWebpage:
        "http://microbusinessparty.org.au/about-mbp/our-candidates/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_MBP_Hyde.jpg",
    },
    {
      Surname: "LIM",
      ChristianName: "Ken Ivan",
      Party: "Australian Christians",
      ProfilePhotoLink:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fheadtopics.com%2Fsg%2Fivan-lim-saga-pap-s-masagos-says-ge-is-time-for-people-to-redeem-themselves-13926812&psig=AOvVaw0_RVOwGkqRPz4L4qzY2U1e&ust=1597625757053000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCMj_HBnusCFQAAAAAdAAAAABAD",
    },
    {
      Surname: "EVANGEL",
      ChristianName: "Eleni",
      Party: "Liberal Party",
      Biography:
        "Evangel has an academic and professional background in education and media and has served as a City of Perth Councillor from 2005 until winning this seat in 2013. She has served on various high profile community committees through her work on the council and is well known from her 15 years working as a presenter, scriptwriter and producer for community and commercial television. Her late father, Tassos Parissis, was one of the first nightclub owners in the Northbridge area and also claims the distinction of opening the first kebab shop in Perth.",
      CandidateWebpage:
        "https://www.waliberal.org.au/your-members/your-electorate/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_LIB_Evangel.jpg",
    },
  ],
  area2: [
    {
      Surname: "MOLYNEUX",
      ChristianName: "Ian",
      Party: "Julie Matheson for Western Australia",
      Biography:
        "Molyneux is the former Chairman of the Heritage Council and a former Fremantle City Architect.",
      CandidateWebpage: "https://juliematheson.com.au/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_JMW_Molyneux.jpg",
    },
    {
      Surname: "HYDE",
      ChristianName: "Archie",
      Party: "Micro Business Party",
      Biography:
        "Hyde was born in New Zealand and arrived in Perth in 1980, He runs a business working as a service provider to the energy and civil infrastructure sectors.",
      CandidateWebpage:
        "http://microbusinessparty.org.au/about-mbp/our-candidates/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_MBP_Hyde.jpg",
    },
    {
      Surname: "LIM",
      ChristianName: "Ken Ivan",
      Party: "Australian Christians",
      ProfilePhotoLink:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fheadtopics.com%2Fsg%2Fivan-lim-saga-pap-s-masagos-says-ge-is-time-for-people-to-redeem-themselves-13926812&psig=AOvVaw0_RVOwGkqRPz4L4qzY2U1e&ust=1597625757053000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOCMj_HBnusCFQAAAAAdAAAAABAD",
    },
    {
      Surname: "EVANGEL",
      ChristianName: "Eleni",
      Party: "Liberal Party",
      Biography:
        "Evangel has an academic and professional background in education and media and has served as a City of Perth Councillor from 2005 until winning this seat in 2013. She has served on various high profile community committees through her work on the council and is well known from her 15 years working as a presenter, scriptwriter and producer for community and commercial television. Her late father, Tassos Parissis, was one of the first nightclub owners in the Northbridge area and also claims the distinction of opening the first kebab shop in Perth.",
      CandidateWebpage:
        "https://www.waliberal.org.au/your-members/your-electorate/",
      ProfilePhotoLink:
        "https://www.abc.net.au/dat/news/elections/wa/2017/guide/photos/PERT_LIB_Evangel.jpg",
    },
  ],
};

export default candidates;
