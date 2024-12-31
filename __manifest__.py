{
    'name': 'Custom Website with OWL Component',
    'version': '1.0',
    'category': 'Website',
    'summary': 'A custom Odoo website module for UI customization.',
    'depends': ['website'],
    'data': [
        'views/custom_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            '/custom_website/static/src/js/custom_component.js',
            '/custom_website/static/src/scss/custom_style.scss',
        ],
    },
    'installable': True,
    'application': False,
}
