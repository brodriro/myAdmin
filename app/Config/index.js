module.exports={

  
    LOGO:{},
    BACKGROUND:'#fd122f',
    PRIMARY_COLOR:'#4CAF50',
    DARK_PRIMARY_COLOR:'#388E3C',
    LIGHT_PRIMARY_COLOR:'#C8E6C9',
    ACCENT_COLOR:'#8BC34A',   

    themes : {
        indigo:{
            primaryColor:'#3F51B5',
            primaryDarkColor:'#303F9F',
            ligthPrimaryColor:'#C5CAE9',
            accentColor:'#03A9F4',
            logo :  require('../images/background/indigo.png')
        },
        red:{
            primaryColor:'#F44336',
            primaryDarkColor:'#D32F2F',
            ligthPrimaryColor:'#FFCDD2',
            accentColor:'#536DFE',
            logo :  require('../images/background/red.png')
        },
        green:{
            primaryColor:'#4CAF50',
            primaryDarkColor:'#388E3C',
            ligthPrimaryColor:'#C8E6C9',
            accentColor:'#FFC107',
            logo :  require('../images/background/green.png')
        },
        orange:{
            primaryColor:'#FF9800',
            primaryDarkColor:'#F57C00',
            ligthPrimaryColor:'#FFE0B2',
            accentColor:'#FF5722',
            logo :  require('../images/background/orange.png')
        },
        amber:{
            primaryColor:'#FFC107',
            primaryDarkColor:'#FFA000',
            ligthPrimaryColor:'#FFECB3',
            accentColor:'#FFEB3B',
            logo :  require('../images/background/amber.png')
        },

    },
    

    getTheme () {
        var theme = 'red';
       
        this.PRIMARY_COLOR =  this.themes[theme].primaryColor;
        this.DARK_PRIMARY_COLOR = this.themes[theme].primaryDarkColor;
        this.LIGHT_PRIMARY_COLOR = this.themes[theme].ligthPrimaryColor;
        this.ACCENT_COLOR = this.themes[theme].accentColor;
     
        this.LOGO.IMAGEN = this.themes[theme].logo;
        return this;
    },    
    
  
}