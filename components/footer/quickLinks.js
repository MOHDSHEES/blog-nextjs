import Link from "next/link";
import React from "react";

const QuickLinks = () => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7 nav-a p-link footer-links">
      <div className="single-footer-caption mb-50">
        <div className="footer-tittle">
          <h4>Quick Links</h4>
        </div>

        <Link class=" mb-2" href="/policies/advertise">
          <p className="color-white">
            <i class="fa fa-angle-right text-dark mr-2"></i>Advertise
          </p>
        </Link>
        <Link class=" mb-2" href="/policies/privacyPolicy">
          <p className="color-white">
            <i class="fa fa-angle-right text-dark mr-2"></i>Privacy Policy
          </p>
        </Link>
        <Link class=" mb-2" href="/policies/termsCondition">
          <p className="color-white">
            <i class="fa fa-angle-right text-dark mr-2"></i>Terms & Condition
          </p>
        </Link>
        <Link class=" mb-2" href="/contact">
          <p className="color-white">
            <i class="fa fa-angle-right text-dark mr-2"></i>Contact Us
          </p>
        </Link>
        <Link class=" mb-2" href="/career">
          <p className="color-white">
            <i class="fa fa-angle-right text-dark mr-2"></i>Careers
          </p>
        </Link>
      </div>
    </div>
  );
};

export default QuickLinks;
