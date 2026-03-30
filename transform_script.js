// Transform Script (onBefore)

var deptName = source.u_dept_name + '';
var deptHead = source.u_dept_head + '';

if (deptName) {

    var deptGR = new GlideRecord('u_x_samy_department');
    deptGR.addQuery('name', deptName);
    deptGR.query();

    if (deptGR.next()) {
        target.department = deptGR.getUniqueValue();
    } else {
        var newDept = new GlideRecord('u_x_samy_department');
        newDept.initialize();
        newDept.name = deptName;
        newDept.dept_head = deptHead;

        var deptId = newDept.insert();

        if (deptId) {
            target.department = deptId;
        }
    }
}