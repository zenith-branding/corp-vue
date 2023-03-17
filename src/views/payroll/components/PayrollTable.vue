<template>
 <div class="row mb-4">
                    <div class="col-sm-12 mb-4">
                        <div id="dashboard-candidates-waiting-payroll" class="card">
                            <div class="card-body">
                                <h1 class="card-title text-success mb-3">Latest Batch Payments Ready to Pay <sapn class="badge badge-pill badge-secondary">This Week</sapn></h1>
                                <div class="table-responsive">
                                    <table id="dashboard-lastest-batch-payments-ready" class="table table-sm table-hover">
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col">Batch ID</th>
                                                <th scope="col">No of Candidates</th>
                                                <th scope="col">No of Shits</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Period</th>
                                                <th scope="col" class="col-actions">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td>BA-1</td>
                                                <td>124</td>
                                                <td>178</td>
                                                <td>£3,503</td>
                                                <td>03-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-2</td>
                                                <td>322</td>
                                                <td>145</td>
                                                <td>£4,330</td>
                                                <td>05-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-3</td>
                                                <td>92</td>
                                                <td>140</td>
                                                <td>£2,900</td>
                                                <td>08-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-4</td>
                                                <td>199</td>
                                                <td>230</td>
                                                <td>£9,674</td>
                                                <td>12-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-5</td>
                                                <td>203</td>
                                                <td>320</td>
                                                <td>£12,283</td>
                                                <td>15-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-6</td>
                                                <td>132</td>
                                                <td>144</td>
                                                <td>£4,343</td>
                                                <td>16-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <router-link to="/payroll/ready-to-pay" title="See All Batches" class="btn btn-sm btn-brand mt-3">
                                    See All Batches
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 mb-4">
                        <div id="dashboard-candidates-waiting-payroll" class="card">
                            <div class="card-body">
                                <h1 class="card-title text-success mb-3">Clients Shifts Need Paying this Week <sapn class="badge badge-pill badge-secondary">This Week</sapn></h1>
                                <div class="table-responsive">
                                    <table id="dashboard-lastest-batch-payments-ready" class="table table-sm table-hover">
                                        <thead class="table-head">
                                            <tr>
                                                <th scope="col">Client ID</th>
                                                <th scope="col">Client Name</th>
                                                <th scope="col">No of Candidates</th>
                                                <th scope="col">No of Shits</th>
                                                <th scope="col">Amount</th>
                                                <th scope="col">Period</th>
                                                <th scope="col" class="col-actions">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody class="table-body">
                                            <tr>
                                                <td>CL-1</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>124</td>
                                                <td>178</td>
                                                <td>£3,503</td>
                                                <td>03-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-2</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>322</td>
                                                <td>145</td>
                                                <td>£4,330</td>
                                                <td>05-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-3</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>92</td>
                                                <td>140</td>
                                                <td>£2,900</td>
                                                <td>08-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-4</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>199</td>
                                                <td>230</td>
                                                <td>£9,674</td>
                                                <td>12-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-5</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>203</td>
                                                <td>320</td>
                                                <td>£12,283</td>
                                                <td>15-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>BA-6</td>
                                                <td>Nuffield Hospital Chichester</td>
                                                <td>132</td>
                                                <td>144</td>
                                                <td>£4,343</td>
                                                <td>16-01-2021</td>
                                                <td class="col-actions">
                                                    <router-link to="/payroll/ready-to-pay/batch" class="icon-button bg-success" title="View">
                                                        <i class="far fa-eye"></i>
                                                    </router-link>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <router-link to="#" title="See All Shifts" class="btn btn-sm btn-brand mt-3">
                                    See All Shifts
                                </router-link>
                            </div>
                        </div>
                    </div>
                    </div>
                    

</template>

<script>
export default {
  name: "PayrollTable",
  components: {},
}
</script>
