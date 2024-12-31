/** @odoo-module **/

import { Component, mount } from '@odoo/owl';

// Define the OWL component
class CustomHeader extends Component {
    static template = `
        <header class="custom-header">
            <div class="header-content">
                <h1>Welcome to Our Custom Website</h1>
                <p>Powered by Odoo and OWL framework.</p>
                <button t-on-click="changeContent">Click Me</button>
            </div>
        </header>
    `;
    
    changeContent() {
        alert("Thank you for visiting! We will create more custom features.");
    }
}

class CustomFooter extends Component {
    static template = `
        <footer class="custom-footer">
            <div class="footer-content">
                <p>&copy; 2024 Custom Website. All rights reserved.</p>
            </div>
        </footer>
    `;
}

// Mount components to the page
document.addEventListener("DOMContentLoaded", () => {
    const headerTarget = document.querySelector("#custom-header");
    const footerTarget = document.querySelector("#custom-footer");
    
    if (headerTarget) {
        mount(CustomHeader, {}, headerTarget);
    }

    if (footerTarget) {
        mount(CustomFooter, {}, footerTarget);
    }
});
