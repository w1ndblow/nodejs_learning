export default function init(options) {

    let tipsphrase = document.querySelector('.tooltip-item');
    tipsphrase.style.display='none';

    let tooltip = document.querySelector('[data-tooltip]');
    tooltip.addEventListener('mouseover', () => {
          tipsphrase.style.display='block';
          console.log(document.querySelector('[data-tooltip]'));
    });

    tooltip.addEventListener('mouseout', () => {
          tipsphrase.style.display='none';
    });
}
