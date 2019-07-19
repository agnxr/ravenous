    componentDidMount() {
        fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDR7baDJT2PMQ-FuyAZHCYNQS93yy6n2Ms`)
        .then(response => {
            if(response.ok){
                return response;
            }
        })
        .then(response => response.json() )
        .then(json => {
            const allItems = json.items;
            const fonts = allItems.filter(item => item.category === "serif" || item.category === "sans-serif" ? item : null);
            const randomFont = [fonts[Math.floor(Math.random()*fonts.length)]];

            this.setState({
                all: fonts,
                allSerif: fonts.filter(item => item.category === "serif" ? item : null),
                allSansSerif: fonts.filter(item => item.category === "sans-serif" ? item : null),
                selectedToDisplay: fonts,
                visibleFonts: this.state.selectedToDisplay.slice(0, this.state.results),
                visibleSerif: this.state.allSerif.slice(0, this.state.results),
                visibleSansSerif: this.state.allSansSerif.slice(0, this.state.results),
                randomFont: randomFont,
                categorySelected: randomFont,
                fontFamilies: fonts.map(font => ( 
                        <link href={`https://fonts.googleapis.com/css?family=${font.family.split(' ').join('+')}&display=swap`} rel="stylesheet"></link>
                    )),
                fontsAmount: fonts.length,       
            })
        } )
        .catch(error => this.setState({ error: `An error occured` }))
    }