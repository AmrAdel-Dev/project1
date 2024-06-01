let btn = document.querySelector('button')
btn.style.cssText = 'font-size: 20px; border: none; background: rgb(35, 169, 110); color: white; padding: 5px; border-radius: 8px; cursor: pointer;'

btn.onclick = function(){
    let inp = document.querySelector('input').value
    if (parseInt(inp) !== 0 && inp !== ''){
        document.querySelector('button').remove()
        // CSS Styling Of Body
        document.body.style.cssText = 'margin: 0px; background-color: rgb(236,236,236); font-family: Tahoma, Arial;'
        // Making The Header
        let header = document.createElement('header')
        header.style.cssText = 'display: flex; padding: 20px; background-color: rgb(255, 255, 255); justify-content: space-between; align-items: center;'
        header.className = 'website-head'
        // Making The Logo Of Header
        let logo = document.createElement('div')
        logo.style.cssText = 'font-weight: bold; color: rgb(35, 169, 110); font-size: 26px;'
        // Making The Text Of Logo 
        let logoText = document.createTextNode('Escopa Shop')
        logo.appendChild(logoText)
        logo.className = 'logo'
        logo.title = 'Website Logo'
        // Making The Menu Of Header
        let menu = document.createElement('ul')
        menu.style.cssText = 'padding: 0px; margin: 0px; display: flex; list-style: none;'
        menu.className = 'menu'
        // Making First Object In Menu
        let menuLi1 = document.createElement('li')
        let liText1 = document.createTextNode('Home')
        menuLi1.style.margin = '0px 6px'
        menuLi1.style.color = 'gray'
        menuLi1.appendChild(liText1)
        // Making Second Object In Menu
        let menuLi2 = document.createElement('li')
        let liText2 = document.createTextNode('About')
        menuLi2.style.margin = '0px 6px'
        menuLi2.style.color = 'gray'
        menuLi2.appendChild(liText2)
        // Making Third Object In Menu
        let menuLi3 = document.createElement('li')
        let liText3 = document.createTextNode('Service')
        menuLi3.style.margin = '0px 6px'
        menuLi3.style.color = 'gray'
        menuLi3.appendChild(liText3)
        // Making Forth Object In Menu
        let menuLi4 = document.createElement('li')
        let liText4 = document.createTextNode('Contact')
        menuLi4.style.margin = '0px 6px'
        menuLi4.style.color = 'gray'
        menuLi4.appendChild(liText4)
        // Appending The Objects In Menu
        menu.appendChild(menuLi1)
        menu.appendChild(menuLi2)
        menu.appendChild(menuLi3)
        menu.appendChild(menuLi4)
        // Appending The Logo And Menu In Header
        header.appendChild(logo)
        header.appendChild(menu)
        // Appending The Header In Body
        document.body.appendChild(header)
        
        
        // Making The Div Of Content
        let contentDiv = document.createElement('div')
        contentDiv.style.cssText = 'display: flex; padding: 20px; flex-wrap: wrap; justify-content: center; gap: 20px; min-height: calc(100vh - 142px); box-sizing: border-box;'
        contentDiv.className = 'content'
        // Making Products In Div
        for (let i = 0; i < parseInt(+inp); i++) {
            let product = document.createElement('div')
            product.style.cssText = 'color: gray; padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: (136, 136, 136); border-radius: 6px;'
            product.className = 'product'
            let proSpan = document.createElement('span')
            proSpan.style.cssText = 'font-size: 40px; color: black; font-weight: normal; display: block; margin-bottom: 10px; margin-top: 10px;'
            let proSpanText = document.createTextNode(i+1)
            proSpan.appendChild(proSpanText)
            product.appendChild(proSpan)
            let proText = document.createTextNode('Product')
            let proPrice = document.createElement('p')
            let proPriceText = document.createTextNode(`${(i * i)*(i + 18)}$`)
            proPrice.append('Price: ')
            proPrice.appendChild(proPriceText)
            product.appendChild(proText)
            product.appendChild(proPrice)
            contentDiv.appendChild(product)
        }
        // Making Footer In Div
        let footer = document.createElement('footer')
        footer.innerHTML = `Copyright ${new Date().getFullYear()}`
        footer.style.cssText = 'background-color: rgb(35, 169, 110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255, 255, 255);'
        footer.className = 'footer'
        // Appending The Div Of Content In Body
        document.body.appendChild(contentDiv)
        document.body.appendChild(footer)
        document.querySelector('input').remove()
    }
}
