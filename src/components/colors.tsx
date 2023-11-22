
export const getColorByType = (type: string) => {
    switch (type) {
        case "noble gas":
            return "bg-green-400 text-black hover:bg-green-700";
        case "Transition Metals":
            return "bg-sky-400 text-white hover:bg-sky-700";
        case "Halogens":
            return "bg-green-400 text-black hover:bg-green-700";
        case "Alkaline Earth Metals":
            return "bg-yellow-400 text-white hover:bg-yellow-700";
        case "nonmetals":
            return "bg-orange-400 text-white hover:bg-orange-700";
        case "Alkali Metals":
            return "bg-blue-600 text-white hover:bg-blue-900";
        case "Metalloids":
            return "bg-pink-400 text-white hover:bg-pink-700";
        case "Lanthanides":
            return "bg-lime-400 text-white hover:bg-lime-700";
        case "Other Metals":
            return "bg-purple-400 text-white hover:bg-purple-700";
        case "Actinides":
            return "bg-teal-400 text-white hover:bg-teal-700";
        default:
            return "bg-gray-400 text-white hover:bg-gray-600";
    }
}

