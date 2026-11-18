Blockly.Arduino['emakefun_motor_init'] = function(block) {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_emakefun_motor'] = '#include <Emakefun_MotorDriver.h>';
  Blockly.Arduino.definitions_['var_emakefun_driver'] = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver(0x60);';
  Blockly.Arduino.setups_['setup_emakefun_motor'] = 'mMotorDriver.begin();';
  return '';
};

Blockly.Arduino['emakefun_dc_motor'] = function(block) {
  var motor = block.getFieldValue('MOTOR');
  var dir = block.getFieldValue('DIR');
  var speed = Blockly.Arduino.valueToCode(block, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '0';

  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_emakefun_motor'] = '#include <Emakefun_MotorDriver.h>';
  Blockly.Arduino.definitions_['var_emakefun_driver'] = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver(0x60);';
  Blockly.Arduino.definitions_['var_emakefun_dc_' + motor] = 'Emakefun_DCMotor *DCMotor_' + motor + ' = mMotorDriver.getDCMotor(' + motor + ');';
  Blockly.Arduino.setups_['setup_emakefun_motor'] = 'mMotorDriver.begin();';

  var code = 'DCMotor_' + motor + '->setSpeed(' + speed + ');\n';
  code += 'DCMotor_' + motor + '->run(' + dir + ');\n';
  return code;
};

Blockly.Arduino['emakefun_dc_motor_stop_all'] = function(block) {
  Blockly.Arduino.definitions_['define_wire'] = '#include <Wire.h>';
  Blockly.Arduino.definitions_['define_emakefun_motor'] = '#include <Emakefun_MotorDriver.h>';
  Blockly.Arduino.definitions_['var_emakefun_driver'] = 'Emakefun_MotorDriver mMotorDriver = Emakefun_MotorDriver(0x60);';
  for (var i = 1; i <= 4; i++) {
    Blockly.Arduino.definitions_['var_emakefun_dc_' + i] = 'Emakefun_DCMotor *DCMotor_' + i + ' = mMotorDriver.getDCMotor(' + i + ');';
  }
  Blockly.Arduino.setups_['setup_emakefun_motor'] = 'mMotorDriver.begin();';

  var code = '';
  for (var i = 1; i <= 4; i++) {
    code += 'DCMotor_' + i + '->setSpeed(0);\n';
    code += 'DCMotor_' + i + '->run(RELEASE);\n';
  }
  return code;
};

Blockly.Arduino['emakefun_ps2_init'] = function(block) {
  var clk = block.getFieldValue('CLK');
  var cmd = block.getFieldValue('CMD');
  var sel = block.getFieldValue('SEL');
  var dat = block.getFieldValue('DAT');

  Blockly.Arduino.definitions_['define_ps2x'] = '#include <PS2X_lib.h>';
  Blockly.Arduino.definitions_['var_ps2x'] = 'PS2X ps2x;';
  Blockly.Arduino.setups_['setup_ps2x'] = 'ps2x.config_gamepad(' + clk + ', ' + cmd + ', ' + sel + ', ' + dat + ', false, false);\n  delay(300);';
  return '';
};

Blockly.Arduino['emakefun_ps2_read'] = function(block) {
  Blockly.Arduino.definitions_['define_ps2x'] = '#include <PS2X_lib.h>';
  Blockly.Arduino.definitions_['var_ps2x'] = 'PS2X ps2x;';
  return 'ps2x.read_gamepad(false, 0);\n';
};

Blockly.Arduino['emakefun_ps2_button'] = function(block) {
  var btn = block.getFieldValue('BTN');
  Blockly.Arduino.definitions_['define_ps2x'] = '#include <PS2X_lib.h>';
  Blockly.Arduino.definitions_['var_ps2x'] = 'PS2X ps2x;';
  var code = 'ps2x.Button(' + btn + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino['emakefun_ps2_analog'] = function(block) {
  var axis = block.getFieldValue('AXIS');
  Blockly.Arduino.definitions_['define_ps2x'] = '#include <PS2X_lib.h>';
  Blockly.Arduino.definitions_['var_ps2x'] = 'PS2X ps2x;';
  var code = 'ps2x.Analog(' + axis + ')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};