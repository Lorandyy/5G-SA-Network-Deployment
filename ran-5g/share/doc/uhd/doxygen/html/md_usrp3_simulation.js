var md_usrp3_simulation =
[
    [ "Instructions", "md_usrp3_simulation.html#autotoc_md238", null ],
    [ "Library Reference", "md_usrp3_simulation.html#autotoc_md239", null ],
    [ "Legacy Library Reference", "md_usrp3_simulation.html#autotoc_md240", null ],
    [ "Running a Testbench", "md_usrp3_sim_running_testbenches.html", [
      [ "Using Xilinx Vivado XSim", "md_usrp3_sim_running_testbenches.html#autotoc_md209", null ],
      [ "Using Siemens ModelSim or Questa", "md_usrp3_sim_running_testbenches.html#autotoc_md210", [
        [ "Setting Up ModelSim or QuestaSim", "md_usrp3_sim_running_testbenches.html#autotoc_md211", null ],
        [ "Simulating with ModelSim through Vivado", "md_usrp3_sim_running_testbenches.html#autotoc_md212", null ],
        [ "Simulating with ModelSim", "md_usrp3_sim_running_testbenches.html#autotoc_md213", null ],
        [ "Simulating with QuestaSim", "md_usrp3_sim_running_testbenches.html#autotoc_md214", null ],
        [ "Compiling the Simulation with ModelSim or Questa", "md_usrp3_sim_running_testbenches.html#autotoc_md215", null ]
      ] ],
      [ "Troubleshooting", "md_usrp3_sim_running_testbenches.html#autotoc_md216", null ]
    ] ],
    [ "Writing a Testbench", "md_usrp3_sim_writing_testbenches.html", "md_usrp3_sim_writing_testbenches" ],
    [ "Simulation Libraries", "md_usrp3_sim_simulation_libraries.html", [
      [ "PktTestExec", "md_usrp3_sim_simulation_libraries.html#autotoc_md221", [
        [ "PkgTestExec Tasks and Functions", "md_usrp3_sim_simulation_libraries.html#autotoc_md222", null ],
        [ "Macros", "md_usrp3_sim_simulation_libraries.html#autotoc_md223", null ]
      ] ],
      [ "PkgChdrUtils", "md_usrp3_sim_simulation_libraries.html#autotoc_md224", null ],
      [ "PkgChdrData", "md_usrp3_sim_simulation_libraries.html#autotoc_md225", null ],
      [ "PkgRfnocBlockCtrlBfm", "md_usrp3_sim_simulation_libraries.html#autotoc_md226", null ],
      [ "sim_clock_gen", "md_usrp3_sim_simulation_libraries.html#autotoc_md227", null ],
      [ "PkgAxiStream", "md_usrp3_sim_simulation_libraries.html#autotoc_md228", null ]
    ] ],
    [ "Legacy Testbenches", "md_usrp3_sim_legacy_testbenches.html", [
      [ "Timescale Defines and Includes", "md_usrp3_sim_legacy_testbenches.html#autotoc_md153", null ],
      [ "Main Module Definition", "md_usrp3_sim_legacy_testbenches.html#autotoc_md154", null ],
      [ "Test Cases", "md_usrp3_sim_legacy_testbenches.html#autotoc_md155", null ]
    ] ],
    [ "Legacy Simulation Libraries", "md_usrp3_sim_libs_general.html", [
      [ "Execution and Reporting (sim_exec_report.vh)", "md_usrp3_sim_libs_general.html#autotoc_md189", null ],
      [ "Clocks and Resets (sim_clks_rsts.vh)", "md_usrp3_sim_libs_general.html#autotoc_md196", null ],
      [ "File I/O (sim_file_io.svh)", "md_usrp3_sim_libs_general.html#autotoc_md201", [
        [ "interface data_file_t", "md_usrp3_sim_libs_general.html#autotoc_md202", [
          [ "Vivado Not Found", "md_usrp3_sim_running_testbenches.html#autotoc_md217", null ],
          [ "ModelSim/Questa Not Found", "md_usrp3_sim_running_testbenches.html#autotoc_md218", null ],
          [ "ModelSim Simulation Libraries Not Found", "md_usrp3_sim_running_testbenches.html#autotoc_md219", null ],
          [ "TEST_BENCH_INIT", "md_usrp3_sim_libs_general.html#autotoc_md190", null ],
          [ "TEST_CASE_START", "md_usrp3_sim_libs_general.html#autotoc_md191", null ],
          [ "TEST_CASE_DONE", "md_usrp3_sim_libs_general.html#autotoc_md192", null ],
          [ "ASSERT_FATAL", "md_usrp3_sim_libs_general.html#autotoc_md193", null ],
          [ "ASSERT_ERROR", "md_usrp3_sim_libs_general.html#autotoc_md194", null ],
          [ "ASSERT_WARNING", "md_usrp3_sim_libs_general.html#autotoc_md195", null ],
          [ "DEFINE_CLK", "md_usrp3_sim_libs_general.html#autotoc_md197", null ],
          [ "DEFINE_LATE_START_CLK", "md_usrp3_sim_libs_general.html#autotoc_md198", null ],
          [ "DEFINE_RESET", "md_usrp3_sim_libs_general.html#autotoc_md199", null ],
          [ "DEFINE_RESET_N", "md_usrp3_sim_libs_general.html#autotoc_md200", null ],
          [ "open", "md_usrp3_sim_libs_general.html#autotoc_md203", null ],
          [ "close", "md_usrp3_sim_libs_general.html#autotoc_md204", null ],
          [ "is_eof", "md_usrp3_sim_libs_general.html#autotoc_md205", null ],
          [ "readline", "md_usrp3_sim_libs_general.html#autotoc_md206", null ],
          [ "writeline", "md_usrp3_sim_libs_general.html#autotoc_md207", null ]
        ] ]
      ] ]
    ] ],
    [ "Legacy AXI Interface Libraries", "md_usrp3_sim_libs_axi.html", [
      [ "AXI4 Stream (sim_axis_lib.vh)", "md_usrp3_sim_libs_axi.html#autotoc_md157", [
        [ "Definition", "md_usrp3_sim_libs_axi.html#autotoc_md158", null ],
        [ "Operations", "md_usrp3_sim_libs_axi.html#autotoc_md159", [
          [ "push_word", "md_usrp3_sim_libs_axi.html#autotoc_md160", null ],
          [ "push_bubble", "md_usrp3_sim_libs_axi.html#autotoc_md161", null ],
          [ "pull_word", "md_usrp3_sim_libs_axi.html#autotoc_md162", null ],
          [ "wait_for_bubble", "md_usrp3_sim_libs_axi.html#autotoc_md163", null ],
          [ "wait_for_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md164", null ],
          [ "push_rand_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md165", null ],
          [ "push_ramp_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md166", null ]
        ] ]
      ] ],
      [ "Compressed VITA (sim_chdr_lib.vh)", "md_usrp3_sim_libs_axi.html#autotoc_md167", [
        [ "CHDR", "md_usrp3_sim_libs_axi.html#autotoc_md168", [
          [ "Operations", "md_usrp3_sim_libs_axi.html#autotoc_md169", null ]
        ] ],
        [ "CVITA Stream Type", "md_usrp3_sim_libs_axi.html#autotoc_md170", [
          [ "Definition", "md_usrp3_sim_libs_axi.html#autotoc_md171", null ],
          [ "push_hdr", "md_usrp3_sim_libs_axi.html#autotoc_md172", null ],
          [ "push_data", "md_usrp3_sim_libs_axi.html#autotoc_md173", null ],
          [ "push_bubble", "md_usrp3_sim_libs_axi.html#autotoc_md174", null ],
          [ "pull_word", "md_usrp3_sim_libs_axi.html#autotoc_md175", null ],
          [ "wait_for_bubble", "md_usrp3_sim_libs_axi.html#autotoc_md176", null ],
          [ "wait_for_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md177", null ],
          [ "wait_for_pkt_get_info", "md_usrp3_sim_libs_axi.html#autotoc_md178", null ],
          [ "push_rand_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md179", null ],
          [ "push_ramp_pkt", "md_usrp3_sim_libs_axi.html#autotoc_md180", null ]
        ] ]
      ] ],
      [ "Memory Mapped AXI4 (sim_axi4_lib.vh)", "md_usrp3_sim_libs_axi.html#autotoc_md181", null ]
    ] ]
];