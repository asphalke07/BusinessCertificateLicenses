const docs = [
    {
      id: 1,
      name: "Aadhar Card",
    },
    {
      id: 2,
      name: "Residence certificate",
    },
    {
      id: 3,
      name: "Nationality Certificate",
    },
    {
      id: 4,
      name: "NOC (No Objection Certificate)",
    },
  ];
  
  const microdocs = () => {
    return (
      <div className="mediumdocsbody">
        <center>Documents required for micro scale business approval.</center>
        <br />
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        View
                      </th>
                      <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                      Status
                  </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {docs.map((doc) => (
                      <tr key={doc.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {doc.name}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div class="flex justify-center">
                            <div class="mb-3 w-40">
                            <button
                            class="form-control
block
w-full
px-3
py-1.5
text-base
font-normal
text-gray-700
bg-white bg-clip-padding
border border-solid border-gray-300
rounded
transition
ease-in-out
m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            type="file"
                            id="formFile"
                        >View</button>
                            </div>
                          </div>
                        </td>
                        <td>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className="mr-2">
                                <input type='radio' name={doc.id} />
                                <label>Approve</label>
                            </div>
                            <div className="mr-2">
                                <input type='radio' name={doc.id} />
                                <label>Reject</label>
                            </div>
                        </div>
                    </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default microdocs;
  