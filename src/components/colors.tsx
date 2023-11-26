
export const getColorByType = (type: string) => {
    switch (type) {
        case "noble gas":
            return "bg-[#005927] text-white hover:bg-[#09301a]";
        case "Transition Metals":
            return "bg-[#0075C5] text-white hover:bg-[#005186]";
        case "Halogens":
            return "bg-[#92A60E] text-black hover:bg-[#738021]";
        case "Alkaline Earth Metals":
            return "bg-[#F9AC00] text-black hover:bg-[#df9800]";
        case "nonmetals":
            return "bg-[#EB6811] text-black hover:bg-[#d85600]";
        case "Alkali Metals":
            return "bg-[#10375c] text-white hover:bg-[#00203E]";
        case "Metalloids":
            return "bg-[#DF0035] text-white hover:bg-[#a10228]";
        case "Lanthanides":
            return "bg-[#C1CB78] text-black hover:bg-[#888f54]";
        case "Other Metals":
            return "bg-[#600F66] text-white hover:bg-[#430947]";
        case "Actinides":
            return "bg-[#5A956F] text-black hover:bg-[#3b7550]";
        default:
            return "bg-gray-400 text-white hover:bg-gray-600";
    }
}

