
 export function onchangeCategories(event){
    let categoriesValue = event.target.value
    console.log(categoriesValue)
    this.setState({categories:categoriesValue })
};

 export function dateOnchange(event){
    let date = event.target.value
    console.log(date)
    this.setState({date: date})
};

export function sumOnchange(event){
    let sum = event.target.value
    console.log(sum)
    this.setState({sum: sum})
};


