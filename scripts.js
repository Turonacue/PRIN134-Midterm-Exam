document.addEventListener("DOMContentLoaded", () => {
    const PetUnpet = document.querySelectorAll('.btn-full');
    const SelectAll = document.querySelector('#btn-select-all');
    const UnselectAll = document.querySelector('#btn-unselect-all');
    const SelectLast = document.querySelector('#btn-select-last');
    const SelectFirst = document.querySelector('#btn-select-first');
    const SelectNext = document.querySelector('#btn-select-next');
    const SelectPrevious = document.querySelector('#btn-select-previous');
    const siteLogo = document.querySelector('.banner-content');
    const cards = document.querySelectorAll('.card');

let currentHighlightedIndex = 0;
    
highlightCard(currentHighlightedIndex);
    
PetUnpet.forEach(button => {
    button.addEventListener('click', function() {
        const icon = this.querySelector('i');
        icon.classList.toggle('fa-regular');
        icon.classList.toggle('fa-solid');
    });
});
    
SelectAll.addEventListener('click', function() {
    PetUnpet.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
});
    
UnselectAll.addEventListener('click', function() {
    PetUnpet.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
});
    
SelectLast.addEventListener('click', function() {
    currentHighlightedIndex = cards.length - 1;
    highlightCard(currentHighlightedIndex);
});
    
SelectFirst.addEventListener('click', function() {
    currentHighlightedIndex = 0;
    highlightCard(currentHighlightedIndex);
});
    
SelectNext.addEventListener('click', function() {
    currentHighlightedIndex = (currentHighlightedIndex + 1) % cards.length;
    highlightCard(currentHighlightedIndex);
});
    
SelectPrevious.addEventListener('click', function() {
    currentHighlightedIndex = (currentHighlightedIndex - 1 + cards.length) % cards.length;
    highlightCard(currentHighlightedIndex);
});
    
siteLogo.addEventListener('click', function() {

    this.classList.add('animate__animated', 'animate__tada');
    this.addEventListener('animationend', function() {
    this.classList.remove('animate__animated', 'animate__tada');
        }, { once: true });
});
    
function highlightCard(index) {
    
    cards.forEach(card => {
        card.classList.remove('card-selected', 'active');
    });
        
    cards[index].classList.add('card-selected', 'active');
    currentHighlightedIndex = index;
    }
});