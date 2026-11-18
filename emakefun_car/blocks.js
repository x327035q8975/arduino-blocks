Blockly.Blocks['emakefun_motor_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("初始化 emakefun 馬達擴充板");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("初始化 I2C 馬達擴充板 (預設位址 0x60)");
  }
};

Blockly.Blocks['emakefun_dc_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("設定直流馬達")
        .appendField(new Blockly.FieldDropdown([
          ["M1", "1"],
          ["M2", "2"],
          ["M3", "3"],
          ["M4", "4"]
        ]), "MOTOR")
        .appendField("方向")
        .appendField(new Blockly.FieldDropdown([
          ["正轉", "FORWARD"],
          ["反轉", "BACKWARD"],
          ["煞車", "BRAKE"],
          ["釋放(停止)", "RELEASE"]
        ]), "DIR");
    this.appendValueInput("SPEED")
        .setCheck("Number")
        .appendField("速度 (0~255)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("控制 M1~M4 直流馬達的轉向與速度");
  }
};

Blockly.Blocks['emakefun_dc_motor_stop_all'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("停止所有直流馬達 (M1~M4)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
    this.setTooltip("將 M1~M4 速度設為 0 並釋放馬達");
  }
};

Blockly.Blocks['emakefun_ps2_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("初始化 PS2 搖桿 (CLK:")
        .appendField(new Blockly.FieldNumber(13), "CLK")
        .appendField("CMD:")
        .appendField(new Blockly.FieldNumber(11), "CMD")
        .appendField("SEL:")
        .appendField(new Blockly.FieldNumber(10), "SEL")
        .appendField("DAT:")
        .appendField(new Blockly.FieldNumber(12), "DAT")
        .appendField(")");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("設定 PS2 接收器腳位，預設為擴充板專用插槽腳位");
  }
};

Blockly.Blocks['emakefun_ps2_read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("讀取並更新 PS2 搖桿狀態");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip("請放在重複執行 (loop) 的最上方，每次迴圈更新一次按鍵狀態");
  }
};

Blockly.Blocks['emakefun_ps2_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("PS2 搖桿按鍵")
        .appendField(new Blockly.FieldDropdown([
          ["方向鍵 上", "PSB_PAD_UP"],
          ["方向鍵 下", "PSB_PAD_DOWN"],
          ["方向鍵 左", "PSB_PAD_LEFT"],
          ["方向鍵 右", "PSB_PAD_RIGHT"],
          ["△ (三角)", "PSB_TRIANGLE"],
          ["○ (圓圈)", "PSB_CIRCLE"],
          ["✕ (叉叉)", "PSB_CROSS"],
          ["□ (方塊)", "PSB_SQUARE"],
          ["L1", "PSB_L1"],
          ["L2", "PSB_L2"],
          ["R1", "PSB_R1"],
          ["R2", "PSB_R2"],
          ["START", "PSB_START"],
          ["SELECT", "PSB_SELECT"]
        ]), "BTN")
        .appendField("被按住");
    this.setOutput(true, "Boolean");
    this.setColour(120);
    this.setTooltip("判斷指定的 PS2 按鍵是否正被按住");
  }
};

Blockly.Blocks['emakefun_ps2_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("讀取 PS2 類比搖桿")
        .appendField(new Blockly.FieldDropdown([
          ["左搖桿 Y軸 (前後)", "PSS_LY"],
          ["左搖桿 X軸 (左右)", "PSS_LX"],
          ["右搖桿 Y軸 (前後)", "PSS_RY"],
          ["右搖桿 X軸 (左右)", "PSS_RX"]
        ]), "AXIS");
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip("回傳類比搖桿數值 (0~255，中間值約為 128)");
  }
};