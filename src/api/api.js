export const base_url = "https://www.dolthub.com/api/v1alpha1/dolthub/us-baby-names/master?q="


export const get_total_count_by_name = (name) => {
    return (
        `Select name, SUM(count) as Total from names where name = '${name}' group by name`.replaceAll(" ", "%20")
    );

}



const get_total_count_by_name_and_year = base_url + 'get_total_count_by_name_and_year'

const get_karen_trend = base_url + 'get_karen_trend'

const get_name_trend_by_year = base_url + 'get_name_trend_by_year'

const get_name_trend_by_state = base_url + 'get_name_trend_by_state'

export default get_total_count_by_name

