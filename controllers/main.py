from odoo import http
from odoo.http import request

class CustomWebsiteController(http.Controller):
    @http.route('/custom_website', auth='public', website=True)
    def index(self, **kw):
        return request.render('custom_website_owl.website_layout')
