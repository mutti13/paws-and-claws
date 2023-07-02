import React from "react";
import cards from "../cards.css";
function Cardd() {
  return (
    <div>
      <div class="main text-center mt-5">
        <h6 class="heading">What's included for 12 months</h6>
        <p class="text-info">
          Everything you'll need to support customer in your first year
        </p>
        <p class="text-info">
          We'll also discount your 2nd year with help Scout 20%
        </p>
      </div>

      <div class="container mt-4 d-flex justify-content-center">
        <div class="row g-0">
          <div class="col-md-4 border-right">
            <div class="cards">
              <div class="first bg-white p-4 text-center">
                <img src="https://img.icons8.com/clouds/100/000000/box.png" />

                <h5>Help Scout plus</h5>
                <p class="line1">
                  No limitation - Its got everything that you 'll need as you
                  grow
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4 border-right">
            <div class="cards">
              <div class=" second bg-white p-4 text-center">
                <img src="https://img.icons8.com/clouds/100/000000/groups.png" />

                <h5>10 Users</h5>
                <p class="line2">
                  $50/month gets you 10 users, and you can add more $10 pe user
                </p>
              </div>
            </div>
          </div>

          <div class="col-md-4">
            <div class="cards">
              <div class=" third bg-white p-4 text-center">
                <img src="https://img.icons8.com/fluent/100/000000/trophy.png" />
                <h5>World Class Support</h5>
                <p class="line3">
                  We'll help you get started and be there when you have
                  questions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cardd;
