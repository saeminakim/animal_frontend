<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="mx-auto my-12" width="90%" flat outlined>
          <v-img :src="animal.popfile" alt="유기동물 사진"></v-img>
          <v-card-text>
            <v-container>
              <v-list>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      신청번호 : {{ application.requestNo }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      신청상태 : {{ application.status }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text> 이름 : {{ application.name }} </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      연락처 : {{ application.mobile }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      이메일주소 : {{ application.email }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text> 성별 : {{ application.gender }} </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      집주소 : {{ application.address }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text> 직업 : {{ application.job }} </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      가족구성원 : {{ application.familyMember }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      가족 동의 여부 : {{ application.familyAgreed }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      반려동물 유무 : {{ application.petAtHome }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      반려동물 소개 : {{ application.petDetails }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      주거형태 : {{ application.houseType }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-icon>
                    <v-icon color="orange"> mdi-paw </v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-card-text>
                      입양희망이유 : {{ application.reason }}
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-container>

            <template>
              <v-row justify="center" v-if="isApplied">
                <v-btn class="ma-3" depressed @click="backToList">뒤로</v-btn>
              </v-row>

              <v-row justify="center" v-else>
                <v-btn class="ma-3" depressed @click="editApp(application.id)"
                  >수정</v-btn
                >
                <v-btn
                  class="ma-3"
                  depressed
                  color="error"
                  @click="cancel(application.id)"
                  >취소요청</v-btn
                >
              </v-row>
            </template>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import api from "../api/animal";
import request from "../api/request";

export default {
  data: () => ({
    animal: [],
    application: [],
  }),
  computed: {
    isApplied() {
      const status = this.application.status;
      const applied = "신청";

      if (status == undefined || status.includes(applied)) {
        return false;
      } else {
        return true;
      }
    },
  },
  mounted() {
    this.getAnimal();
    this.getApp();
  },
  methods: {
    async getAnimal() {
      const id = this.$route.params.id;
      const result = await api.details(id);
      if (result.status == 200) {
        this.animal = result.data;
      }
    },

    async getApp() {
      const requestNo = this.$route.params.requestNo;
      const name = this.$route.params.name;
      const result = await request.get(requestNo, name);
      if (result.status == 200) {
        this.application = result.data[0];
      }
    },

    editApp(id) {
      this.$router.push({ name: "editApp", params: { id } });
    },

    cancel(id) {
      this.$router.push({ name: "cancel", params: { id } });
    },

    backToList() {
      return this.$router.go(-1);
    },
  },
};
</script>
