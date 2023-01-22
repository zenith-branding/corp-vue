<template>
    <HeaderTop />
    <HeaderBottom />
        <div class="main-wrapper container">
            <div class="main-heading-wrapper">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="content-area">
                            <!-- Title Area !-->
                            <h1 class="main-heading">Users</h1>
                            <p class="main-sub-heading">List of all current Users in the system</p>
                            <!-- END Title Area !-->
                        </div>
                    </div>
                    <div class="col-sm-6 d-sm-flex justify-content-end align-items-center pb-xs-5">
                        <div class="button-area text-right">
                            <!-- Tickets Search Button !-->
                            <input class="form-control" type="text" placeholder="Search User" aria-label="User Search">
                            <!-- END Tickets Search Button !-->
                        </div>
                    </div>
                </div> 
            </div>
            <div id="Users-all-Users" class="card card-table">
                <div class="card-body">
                    <div class="row card-table-header">
                        <div class="col-lg-4 col-md-4 col-sm-12">
                            <div class="content-area">
                                <h4 class="card-title text-brand">List of all Users</h4>
                                <p class="card-text pb-1" id="Users-all-Users-counts"><span class="total">4</span> Users currently in the system</p>
                            </div>
                        </div>
                    </div>
                    <div class="table-responsive hide-scroll-bars">
                        <table id="Users-all-Users-table" class="table table-sm table-hover">
                            <thead class="table-head">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Eclipse ID</th>
                                    <th scope="col" class="col-actions">Actions</th>
                                </tr>
                            </thead>
                            <tbody class="table-body">
                                <tr>
                                    <td>CA-1</td>
                                    <td>John Doe</td>
                                    <td>Doctor</td>
                                    <td>PAYE</td>
                                    <td>
                                        <span class="badge badge-pill badge-success">Active</span>
                                    </td>
                                    <td>323466</td>
                                    <td class="col-actions">
                                        <router-link to="/Users/view" class="icon-button bg-brand" title="View Medical Locums Group">
                                            <i class="far fa-eye"></i>
                                        </router-link>
                                        <a href="#" class="icon-button bg-default" title="Shifts">
                                            <i class="far fa-clock"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Payslips">
                                            <i class="far fa-money-check"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Invoices">
                                            <i class="far fa-file-invoice-dollar"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CA-2</td>
                                    <td>Jane Doe</td>
                                    <td>Nurse</td>
                                    <td>Limited</td>
                                    <td>
                                        <span class="badge badge-pill badge-warning">Inactive</span>
                                    </td>
                                    <td>465433</td>
                                    <td class="col-actions">
                                        <router-link to="/Users/view" class="icon-button bg-brand" title="View Medical Locums Group">
                                            <i class="far fa-eye"></i>
                                        </router-link>
                                        <a href="#" class="icon-button bg-default" title="Shifts">
                                            <i class="far fa-clock"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Payslips">
                                            <i class="far fa-money-check"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Invoices">
                                            <i class="far fa-file-invoice-dollar"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CA-3</td>
                                    <td>Jack Doe</td>
                                    <td>Mental Health</td>
                                    <td>Umbrella</td>
                                    <td>
                                        <span class="badge badge-pill badge-danger">Suspended</span>
                                    </td>
                                    <td>234553</td>
                                    <td class="col-actions">
                                        <router-link to="/Users/view" class="icon-button bg-brand" title="View Medical Locums Group">
                                            <i class="far fa-eye"></i>
                                        </router-link>
                                        <a href="#" class="icon-button bg-default" title="Shifts">
                                            <i class="far fa-clock"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Payslips">
                                            <i class="far fa-money-check"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Invoices">
                                            <i class="far fa-file-invoice-dollar"></i>
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>CA-4</td>
                                    <td>Jacob Doe</td>
                                    <td>Mental Health</td>
                                    <td>Limited</td>
                                    <td>
                                        <span class="badge badge-pill badge-secondary">Archived</span>
                                    </td>
                                    <td>132093</td>
                                    <td class="col-actions">
                                        <router-link to="/users/view" class="icon-button bg-brand" title="View Medical Locums Group">
                                            <i class="far fa-eye"></i>
                                        </router-link>
                                        <a href="#" class="icon-button bg-default" title="Shifts">
                                            <i class="far fa-clock"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Payslips">
                                            <i class="far fa-money-check"></i>
                                        </a>
                                        <a href="#" class="icon-button bg-default" title="Invoices">
                                            <i class="far fa-file-invoice-dollar"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="pagination-wrapper mt-3">
                        <nav>
                            <ul class="pagination">
                                <li class="page-item disabled">
                                    <span class="page-link">‹</span>
                                </li>
                                <li class="page-item active">
                                    <span class="page-link">1</span>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">2</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">3</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">›</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import HeaderTop from './Components/HeaderTop.vue'
import HeaderBottom from './Components/HeaderBottom.vue'

export default {
    name: 'Users',
    components: {
        HeaderTop,
        HeaderBottom
    }
}
</script>