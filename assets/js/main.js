AOS.init({
    disable: function() {
        return window.innerWidth < 1280;
    },
})

new Splide("#fp-splide", {
    perPage: 2,
    perMove: 1,
    pagination: false,
    arrows: true,
    interval: 1000,
    classes: {
		arrows: 'fp-list-arrows',
		arrow : 'fp-arrow',
		prev  : 'fp-prev-arrow',
		next  : 'fp-next-arrow',
    },
}).mount();

$(".pbo-img a").hover(function() {
    var image = $(this).data("src");
    $(this)
        .closest(".fp-list-box-img")
        .children("a")
        .find("img")
        .attr("src", image);
    console.log(image);
});