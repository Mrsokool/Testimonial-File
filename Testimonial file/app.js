(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')

    const button = document.querySelectorAll('.btn')

    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(Img, name, text)

        customers.push(Customer)
    }
    createCustomer(0, 'John', "i'm sorry but a lot of the ideas you are suggesting, such as disabling zoom, are built into systems so that people with accessibility issues can use the content. In short, your suggestions are anti-accessibility. I can almost guarantee that implementation would not pass w3C accessibility requirements." )
    createCustomer(1, 'Sandy', 'Such behavior will also increase the chances that your user makes an error, slowing down their experience. In practice, this can manifest itself as decreased page views, fewer sales, and less overall engagement. ' )
    createCustomer(2, 'Amy', 'Although these fluid grid systems are closely related to what we’ve been discussing here, they’re really a whole separate entity that would require an additional tutorial to discuss in detail. Therefore, I will just mention some major frameworks that support such behavior. ' )
    createCustomer(3, 'Tyrell', 'Tomislav is a full-stack developer and designer with over 20 years of experience. He has recently focused on React Native Mobile development and real-time databases. ' )
    createCustomer(4, 'wanda', 'Tomislav is a full-stack developer and designer with over 20 years of experience. He has recently focused on React Native Mobile development and real-time databases. ' )


        btn.forEach(function(button){
        button.addEventListener('click', function(e){
        if (e.target.parentElement.classList.contains('prevbtn')) {
            if (index === 0) {
                index = customers.lenght
            }
            index--
            customerImage.scr = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }

        if (e.target.parentElement.classList.contains('nextbtn')) {
            index++ 
            if (index === customers.lenght) {
                index = 0
            }
            customerImage.scr = customers[index].img
            customerName.textContent = customers[index].name
            customerText.textContent = customers[index].text
        }
    })
})
})();