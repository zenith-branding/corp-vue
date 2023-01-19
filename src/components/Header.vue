<template>
  <header id="header">
    Header here
    <div class="header-top sec-fluid">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-4 col-4 logo-col">
            <a href="#/" class="logo router-link-active" title="Medical Locums">
              <img
                src="/img/logo.d47e03f4.png"
                alt="Medical Locums"
                class="d-none d-sm-block"
              />
              <img src="" alt="Medical Locums" class="d-block d-sm-none" />
            </a>
          </div>
          <div class="col-lg-9 col-md-9 col-sm-8 col-8 navigation-col">
            <ul class="navigation inline float-right">
              <li class="icon">
                <a href="javascript:void(0);" title="Notifications"
                  ><i class="far fa-bell"></i
                ></a>
              </li>
              <li class="icon alt d-none d-sm-block">
                <a href="#/my-account" class="" title="David Reis"
                  ><i class="far fa-user"></i
                ></a>
              </li>
              <li class="icon last">
                <a href="#/login" class="" title="Log Out"
                  ><i class="far fa-power-off"></i
                ></a>
              </li>
              <li class="d-block d-sm-none">
                <a href="javascript:void(0);" class="mega-toggle"
                  ><i class="far fa-bars"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <div class="header-bottom-inner">
        <div class="header-area d-block d-sm-none">
          <a href="#/" class="logo router-link-active" title="Medical Locums"
            ><img
              src="http://corp.brandelevator.co.uk/assets/images/logo-normal.png"
              alt="Medical Locums"
          /></a>
        </div>
        <div class="container-fluid">
          <div class="row">
            <nav class="col-sm-12 navigation">
              <ul class="inline">
                <li>
                  <a href="#/" class="router-link-active" title="Dashboard"
                    ><i class="far fa-home"></i>Dashboard
                  </a>
                </li>
                <li class="has-children">
                  <a href="#/candidates" class="" title="Candidates"
                    ><i class="far fa-user-nurse"></i>Candidates </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li>
                        <a href="#/candidates" class="" title="All Candidates"
                          >All Candidates</a
                        >
                      </li>
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Reports"
                          aria-current="page"
                          >Reports</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="has-children">
                  <a href="#/clients" class="" title="Clients"
                    ><i class="far fa-hospital"></i>Clients </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li>
                        <a href="#/clients" class="" title="All Clients"
                          >All Clients</a
                        >
                      </li>
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Reports"
                          aria-current="page"
                          >Reports</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="has-children">
                  <a href="#/shifts" class="" title="Shifts"
                    ><i class="far fa-clock"></i>Shifts </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li>
                        <a href="#/shifts" class="" title="All Clients"
                          >All Shifts</a
                        >
                      </li>
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Reports"
                          aria-current="page"
                          >Reports</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="has-children">
                  <a href="#/payroll" class="" title="Payroll"
                    ><i class="far fa-money-check-edit-alt"></i>Payroll </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li>
                        <a href="#/payroll/all" class="" title="All Payrolls"
                          >All Payrolls</a
                        >
                      </li>
                      <li>
                        <a href="#/payroll/pending" class="" title="Pending">
                          Pending<span class="badge badge-pill badge-danger"
                            >430</span
                          ></a
                        >
                      </li>
                      <li>
                        <a href="#/payroll/on-hold" class="" title="On-Hold">
                          On-Hold<span class="badge badge-pill badge-danger"
                            >267</span
                          ></a
                        >
                      </li>
                      <li>
                        <a
                          href="#/payroll/ready-to-pay"
                          class=""
                          title="Ready to Pay"
                        >
                          Ready to Pay<span
                            class="badge badge-pill badge-danger"
                            >113</span
                          ></a
                        >
                      </li>
                      <li>
                        <a href="#/payroll/paid" class="" title="Paid">Paid</a>
                      </li>
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Reports"
                          aria-current="page"
                          >Reports</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="has-children">
                  <a href="#/invoices" class="" title="Invoices"
                    ><i class="far fa-file-invoice-dollar"></i>Invoices </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li class="has-children">
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Incoming Invoices"
                          aria-current="page"
                          >Incoming Invoices</a
                        ><span class="arrow"
                          ><i class="far fa-angle-down"></i
                        ></span>
                        <div class="dropdown-wrapper">
                          <ul class="dropdown">
                            <li>
                              <a
                                href="#/invoices/incoming/all"
                                class=""
                                title="All Invoices"
                                >All Invoices</a
                              >
                            </li>
                            <li>
                              <a
                                href="#/invoices/incoming/waiting-to-receive"
                                class=""
                                title="Waiting to Receive"
                              >
                                Waiting to Receive<span
                                  class="badge badge-pill badge-danger"
                                  >43</span
                                ></a
                              >
                            </li>
                            <li>
                              <a
                                href="#/invoices/incoming/settled"
                                class=""
                                title="Settled"
                                >Settled</a
                              >
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li class="has-children">
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Outgoing Invoices"
                          aria-current="page"
                          >Outgoing Invoices</a
                        ><span class="arrow"
                          ><i class="far fa-angle-down"></i
                        ></span>
                        <div class="dropdown-wrapper">
                          <ul class="dropdown">
                            <li>
                              <a
                                href="#/invoices/outgoing/all"
                                class=""
                                title="All Invoices"
                                >All Invoices</a
                              >
                            </li>
                            <li>
                              <a
                                href="#/invoices/outgoing/waiting-payment"
                                class=""
                                title="Waiting Payment"
                              >
                                Waiting Payment<span
                                  class="badge badge-pill badge-danger"
                                  >76</span
                                ></a
                              >
                            </li>
                            <li>
                              <a
                                href="#/invoices/outgoing/settled"
                                class=""
                                title="Settled"
                                >Settled</a
                              >
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Reports"
                          aria-current="page"
                          >Reports</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="has-children">
                  <a
                    href="#/#"
                    class="router-link-exact-active router-link-active"
                    title="HQ"
                    aria-current="page"
                    ><i class="far fa-building"></i>HQ </a
                  ><span class="arrow"><i class="far fa-angle-down"></i></span>
                  <div class="dropdown-wrapper">
                    <ul class="dropdown">
                      <li>
                        <a
                          href="#/#"
                          class="router-link-exact-active router-link-active"
                          title="Staff"
                          aria-current="page"
                          >Staff</a
                        >
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.blue_text
  color blue
.header-bottom
    // font-size 100px
</style>